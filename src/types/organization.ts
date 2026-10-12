export type Campus = "Kristiansand" | "Grimstad" | "Felles";

export interface BoardMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly roleEn?: string;
  readonly email: string;
  readonly phone?: string;
  readonly campus: Campus;
  readonly imageUrl?: string;
  readonly responsibilities?: readonly string[];
  readonly responsibilitiesEn?: readonly string[];
}

export interface StudentAssociation {
  readonly id: string;
  readonly name: string;
  readonly shortName?: string;
  readonly faculty: string;
  readonly facultyEn?: string;
  readonly studyProgram?: string;
  readonly campus?: Campus;
  readonly websiteUrl?: string;
  readonly instagramUrl?: string;
  readonly facebookUrl?: string;
  readonly email?: string;
  readonly description?: string;
  readonly descriptionEn?: string;
  readonly logoUrl?: string;
}

export interface StudentActivity {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly categoryEn?: string;
  readonly description?: string;
  readonly descriptionEn?: string;
  readonly imageUrl?: string;
  readonly websiteUrl?: string;
  readonly instagramUrl?: string;
  readonly facebookUrl?: string;
  readonly email?: string;
}

export interface ParliamentFaculty {
  readonly name: string;
  readonly nameEn: string;
  readonly representatives: readonly ParliamentMember[];
  readonly substitutes: readonly ParliamentMember[];
}

export interface ParliamentMember {
  readonly name: string;
  readonly isVacant?: boolean;
}

export interface OpenPosition {
  readonly id: string;
  readonly title: string;
  readonly department: string;
  readonly deadline: string;
  readonly link: string;
  readonly description: string;
}
