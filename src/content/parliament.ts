import { ParliamentFaculty } from "@/types/organization";

export const PARLIAMENT_FACULTIES: readonly ParliamentFaculty[] = [
  {
    name: "Handelshøyskolen ved UiA",
    nameEn: "School of Business and Law",
    representatives: [
      { name: "Martine Holmoe Tengs" },
      { name: "Agnes Nymark" },
      { name: "Sunniva Skolås" },
      { name: "Thea Korneliussen" },
    ],
    substitutes: [
      { name: "Emil Briskelund" },
      { name: "Kenneth Engeland Smith" },
      { name: "Vår Flåtene Bolstad" },
      { name: "", isVacant: true },
    ],
  },
  {
    name: "Fakultetet for Teknologi og realfag",
    nameEn: "Faculty of Engineering and Science",
    representatives: [
      { name: "Jakob Moen Bekken" },
      { name: "Asif Soltani" },
      { name: "Morten Andreas Myrstad" },
      { name: "Ole Andrè Rønsåsbjørg" },
    ],
    substitutes: [
      { name: "William Skauge" },
      { name: "Helene Aspelund" },
      { name: "Kim Andrè Lønø" },
      { name: "Nasiba Salehin" },
    ],
  },
  {
    name: "Fakultetet for Samfunnsvitenskap",
    nameEn: "Faculty of Social Sciences",
    representatives: [
      { name: "Mia Gjermstad" },
      { name: "Eirik Arnestad Næss" },
      { name: "Even Skotnes" },
      { name: "Adam Omar" },
    ],
    substitutes: [
      { name: "Amir Krpo" },
      { name: "Simen Dovland Paulsen" },
      { name: "Rikke Sofie Moltumyr" },
      { name: "Yasir A. Mohamed" },
    ],
  },
  {
    name: "Avdeling for Lærerutdanning",
    nameEn: "Teacher Education unit",
    representatives: [
      { name: "Ingrid Lenes Trulsvik" },
      { name: "Kristian Sand" },
      { name: "Iver Berle Lokshall" },
      { name: "Daniel Rørvik" },
    ],
    substitutes: [
      { name: "Silje Bruun Haugen" },
      { name: "Katarina Lyng" },
      { name: "", isVacant: true },
      { name: "", isVacant: true },
    ],
  },
  {
    name: "Fakultetet for Helse- og idrettsvitenskap",
    nameEn: "Faculty of Health and Sport Sciences",
    representatives: [
      { name: "Hedda Yvonne M. Semb-Røren" },
      { name: "Hedda Røe Åkra" },
      { name: "Otilie Vangen" },
      { name: "Andrea Furuholt" },
    ],
    substitutes: [
      { name: "", isVacant: true },
      { name: "", isVacant: true },
      { name: "", isVacant: true },
      { name: "", isVacant: true },
    ],
  },
  {
    name: "Fakultetet for Humaniora og Pedagogikk",
    nameEn: "Faculty of Humanities and Education",
    representatives: [
      { name: "Synne Mjøs Sørensen" },
      { name: "Danli Peters" },
      { name: "Federico Agostini" },
    ],
    substitutes: [
      { name: "", isVacant: true },
      { name: "", isVacant: true },
      { name: "", isVacant: true },
    ],
  },
  {
    name: "Fakultetet for Kunstfag",
    nameEn: "Faculty of Fine Arts",
    representatives: [
      { name: "Antonina Zerbst" },
      { name: "Sophia Hansteen Jeffery" },
    ],
    substitutes: [
      { name: "Gustav Sæterøy" },
      { name: "Eskil Andresen" },
    ],
  },
] as const;

export const PARLIAMENT_INTRO_NO = `Studentene har en viktig stemme i demokratiet på UiA. Derfor er Studentparlamentet øverste beslutningsorgan i STA. Studentparlamentet består av 25 representanter fra alle fakultetene og Avdeling for lærerutdanning. Det er disse representantene som skal ta politiske avgjørelser på vegne av UiAs studentmasse.

Studentparlamentet har møter én gang i måneden hvor parlamentsmedlemmene skal diskutere og vedta saker som STA-styret legger frem. Møtene blir holdt annenhver gang i Kristiansand, og annenhver gang i Grimstad.`;

export const PARLIAMENT_INTRO_EN = `Students have an important voice in the democracy at UiA. Therefore, the Student Parliament is the highest decision-making body in STA. The Student Parliament consists of 25 representatives from all the faculties and the Department of Teacher Education. It is these representatives who will make political decisions on behalf of UiA's student body.

The student parliament meets once a month, where the members of the parliament discuss and adopt matters presented by the STA-board. The meetings are held every second time in Kristiansand, and every second time in Grimstad.`;
