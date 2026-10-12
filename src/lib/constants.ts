export const SITE_METADATA = {
  name: "Studentorganisasjonen i Agder",
  shortName: "STA",
  tagline: "Studentenes stemme ved Universitetet i Agder",
  description:
    "Studentorganisasjonen i Agder (STA) er en interesseorganisasjon som representerer alle studentene ved Universitetet i Agder.",
  url: "https://stastudent.no",
  ogImage: "https://stastudent.no/wp-content/uploads/2019/01/sta2-tinified.jpg",
} as const;

export const CONTACT_INFO = {
  kristiansandAddress: "Universitetsveien 24, 4630 Kristiansand S",
  grimstadAddress: "Jon Lilletuns vei 9, 4879 Grimstad",
  orgNumber: "981 596 412",
  phone: "+47 38 14 20 10",
  email: "sta@uia.no",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/stastudent/",
  instagram: "https://www.instagram.com/stagder/",
  twitter: "https://twitter.com/stastudent",
  linkedin: "https://www.linkedin.com/company/studentorganisasjonen-i-agder",
} as const;

export const PARTNERS = [
  {
    name: "Norsk studentorganisasjon (NSO)",
    nameEn: "The National union of students in Norway (NSO)",
    url: "https://student.no",
    logo: "https://stastudent.no/wp-content/uploads/2024/05/NSO-logo.png",
    alt: "Norsk studentorganisasjon (NSO) logo",
    description: "Norges største interesseorganisasjon for studenter",
  },
  {
    name: "Universitetet i Agder (UiA)",
    nameEn: "University of Agder (UiA)",
    url: "https://www.uia.no",
    logo: "https://stastudent.no/wp-content/uploads/2020/11/uia-horisontal-med-navn-Positiv.png",
    alt: "Universitetet i Agder (UiA) logo",
    description: "Vårt vertsuniversitet med campus i Kristiansand og Grimstad",
  },
  {
    name: "Studentsamskipnaden i Agder (SiA)",
    nameEn: "Student Welfare Organization (SiA)",
    url: "https://sia.no",
    logo: "https://stastudent.no/wp-content/uploads/2020/11/sialogo.png",
    alt: "Studentsamskipnaden i Agder (SiA) logo",
    description: "Studentvelferd: bolig, trening, spisesteder og helse",
  },
  {
    name: "Studentenes og Akademikernes Internasjonale Hjelpefond (SAIH)",
    nameEn: "Students' and Academics' International Assistance Fund (SAIH)",
    url: "https://www.saih.no/no",
    logo: "https://stastudent.no/wp-content/uploads/2024/05/SAIH-logo-PNG-1-1024x1024.png",
    alt: "Studentenes og Akademikernes Internasjonale Hjelpefond (SAIH) logo",
    description: "Solidaritet og rett til høyere utdanning globalt",
  },
] as const;
