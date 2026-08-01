export interface Subject {
  name: string;
  credits: number;
  type: string;
}

export type StudyMajor =
  | 'Calculatoare'
  | 'Automatica si Calculatoare'
  | 'Electronica'
  | 'Mecanica';

export type StudyYear = 'Anul 1' | 'Anul 2' | 'Anul 3' | 'Anul 4';

export type CurriculumKey = string;

export interface UserProfile {
  major: StudyMajor;
  year: StudyYear;
}