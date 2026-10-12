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
    name: "Norsk Studentorganisasjon (NSO)",
    url: "https://student.no",
    logo: "/images/partners/nso-logo.png",
  },
  {
    name: "Universitetet i Agder (UiA)",
    url: "https://www.uia.no",
    logo: "/images/partners/uia-logo.png",
  },
  {
    name: "Studentsamskipnaden i Agder (SiA)",
    url: "https://sia.no",
    logo: "/images/partners/sia-logo.png",
  },
  {
    name: "SAIH",
    url: "https://www.saih.no/no",
    logo: "/images/partners/saih-logo.png",
  },
] as const;
