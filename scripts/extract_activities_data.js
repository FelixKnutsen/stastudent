const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

function parseAllActivities() {
  const htmlNo = fs.readFileSync(path.join(__dirname, 'studentaktiviteter.html'), 'utf-8');
  const domNo = new JSDOM(htmlNo);
  const docNo = domNo.window.document;

  const htmlEn = fs.readFileSync(path.join(__dirname, 'studentaktiviteter_en.html'), 'utf-8');
  const domEn = new JSDOM(htmlEn);
  const docEn = domEn.window.document;

  // Let's create an extractor for all 40 items
  // We can locate them by their known titles
  const activityNames = [
    // Musikk, dans og drama
    { name: "Femmes Spillopus ad Libitum", category: "Musikk, dans og drama", categoryEn: "Music, dance and drama" },
    { name: "Peripeti Studentforening", category: "Musikk, dans og drama", categoryEn: "Music, dance and drama" },
    { name: "Blandakoret Bondebrølet", category: "Musikk, dans og drama", categoryEn: "Music, dance and drama" },
    { name: "Spadser & Blæse-Ensembelet", category: "Musikk, dans og drama", categoryEn: "Music, dance and drama" },
    { name: "Studinekoret Lady klukk", category: "Musikk, dans og drama", categoryEn: "Music, dance and drama" },
    { name: "Mandschoiret Quantum Oellarus Op & Frem", category: "Musikk, dans og drama", categoryEn: "Music, dance and drama" },
    { name: "Ungswingsør", category: "Musikk, dans og drama", categoryEn: "Music, dance and drama" },

    // Sport og Friluft
    { name: "Kristiansand Studentklatring", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },
    { name: "Conventus Croquet", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },
    { name: "Friluftsgruppa Faunus - Grimstad", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },
    { name: "UiA Lacrosse", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },
    { name: "Kristiansand Studentidrettslag (KSI)", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },
    { name: "Grimstad Studentidrettslag (GSI)", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },
    { name: "UiA konkurranse-instinkt", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },
    { name: "UiA Dart", category: "Sport og friluft", categoryEn: "Sports and outdoor activities" },

    // Politisk tilknytning
    { name: "AUF-studentene UiA", category: "Politisk tilknytning", categoryEn: "Political groups" },
    { name: "Høyres Studenterforening i Agder", category: "Politisk tilknytning", categoryEn: "Political groups" },
    { name: "Sosialistiske Studenter i Agder", category: "Politisk tilknytning", categoryEn: "Political groups" },
    { name: "YATA Kristiansand", category: "Politisk tilknytning", categoryEn: "Political groups" },

    // Religiøs tilknytning
    { name: "Studentlaget Grimstad", category: "Religiøs tilknytning", categoryEn: "Faith and religion" },
    { name: "Kristiansand Kristelige Studentlag (KKS)", category: "Religiøs tilknytning", categoryEn: "Faith and religion" },
    { name: "StudentKRIK - Kristiansand", category: "Religiøs tilknytning", categoryEn: "Faith and religion" },
    { name: "StudentKRIK - Grimstad", category: "Religiøs tilknytning", categoryEn: "Faith and religion" },

    // Internasjonalt
    { name: "Amnesty-studentene Kristiansand", category: "Internasjonalt", categoryEn: "International" },
    { name: "Erasmus Student Network (ESN Agder)", category: "Internasjonalt", categoryEn: "International" },
    { name: "ELSA Kristiansand", category: "Internasjonalt", categoryEn: "International" },
    { name: "Studentenes og Akademikernes Internasjonale Hjelpefond - Kristiansand", category: "Internasjonalt", categoryEn: "International" },

    // Media og kommunikasjon
    { name: "Studentavisen Unikum", category: "Media og kommunikasjon", categoryEn: "Media and communication" },
    { name: "Studentmållaget i Agder", category: "Media og kommunikasjon", categoryEn: "Media and communication" },

    // Annet
    { name: "Børsgruppen UiA", category: "Annet", categoryEn: "Other" },
    { name: "Ingeniører Uten Grenser UiA og Sørlandet", category: "Annet", categoryEn: "Other" },
    { name: "Motor UiA", category: "Annet", categoryEn: "Other" },
    { name: "Studentjuristen", category: "Annet", categoryEn: "Other" },
    { name: "Lærerstudentene ved UiA - Kristiansand", category: "Annet", categoryEn: "Other" },
    { name: "Start Agder", category: "Annet", categoryEn: "Other" },
    { name: "Øl, Viser og Dram", category: "Annet", categoryEn: "Other" },
    { name: "Econa - av og for økonomer", category: "Annet", categoryEn: "Other" },
    { name: "Skeive Studenter Agder", category: "Annet", categoryEn: "Other" },
    { name: "UiA Case Club", category: "Annet", categoryEn: "Other" },
    { name: "UiA Tabletop - Kristiansand", category: "Annet", categoryEn: "Other" }
  ];

  console.log(`Auditing ${activityNames.length} activities...`);
  
  // For each activity, search for its node in docNo
  const results = activityNames.map(item => {
    // Look for heading containing the name
    const heading = Array.from(docNo.querySelectorAll('h2, h3, h4, .ha-card-title')).find(el => 
      el.textContent.trim().toLowerCase().includes(item.name.toLowerCase().slice(0, 15))
    );

    if (!heading) {
      console.warn(`Heading not found for: ${item.name}`);
      return item;
    }

    // Container is either .ha-card or .elementor-column or parent section
    const card = heading.closest('.ha-card') || heading.closest('.elementor-column') || heading.closest('.elementor-widget')?.parentElement;
    const section = heading.closest('.elementor-row, .elementor-container, .e-con-inner, .elementor-section') || card;

    // Image
    const imgEl = (card && card.querySelector('img')) || (section && section.querySelector('img'));
    const imageUrl = imgEl ? imgEl.src : undefined;

    // Text description
    let desc = '';
    let descEn = '';
    
    // Check tabs (Norsk / English)
    const tabs = (card || section)?.querySelector('.elementor-tabs');
    if (tabs) {
      const tabContents = Array.from(tabs.querySelectorAll('.elementor-tab-content'));
      if (tabContents.length >= 1) desc = tabContents[0].textContent.trim().replace(/\s+/g, ' ');
      if (tabContents.length >= 2) descEn = tabContents[1].textContent.trim().replace(/\s+/g, ' ');
    } else {
      const pEls = Array.from((card || section)?.querySelectorAll('p, .ha-card-content, .elementor-text-editor') || []);
      desc = pEls.map(p => p.textContent.trim().replace(/\s+/g, ' ')).filter(t => t.length > 20).join(' ');
    }

    // Links
    const links = Array.from((card || section)?.querySelectorAll('a') || []);
    let email = links.find(a => a.href.startsWith('mailto:') || a.href.includes('@'))?.href.replace('mailto:', '').replace('http://', '');
    let facebookUrl = links.find(a => a.href.includes('facebook.com') || a.href.includes('fb.com'))?.href;
    let instagramUrl = links.find(a => a.href.includes('instagram.com'))?.href;
    let websiteUrl = links.find(a => !a.href.includes('facebook') && !a.href.includes('instagram') && !a.href.includes('mailto') && !a.href.includes('@') && !a.href.includes('twitter') && !a.href.includes('linkedin') && !a.href.includes('#') && a.href.startsWith('http'))?.href;

    // Slug / ID
    const id = item.name.toLowerCase()
      .replace(/[^a-z0-9æøå]/gi, '-')
      .replace(/æ/gi, 'ae')
      .replace(/ø/gi, 'o')
      .replace(/å/gi, 'a')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    return {
      id,
      name: item.name,
      category: item.category,
      categoryEn: item.categoryEn,
      description: desc || undefined,
      descriptionEn: descEn || undefined,
      imageUrl,
      websiteUrl,
      instagramUrl,
      facebookUrl,
      email
    };
  });

  fs.writeFileSync(path.join(__dirname, 'extracted_activities.json'), JSON.stringify(results, null, 2));
  console.log('Saved extracted_activities.json');
}

parseAllActivities();
