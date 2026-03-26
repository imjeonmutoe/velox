export interface ProblemItem {
  icon: string;
  text: string;
}

export interface ProblemSectionProps {
  title?: string;
  subtitle?: string;
  problems: ProblemItem[];
  solutionText?: string;
}