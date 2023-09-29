export interface ChapterProps {
  src: string;
  title: string;
  price?: number;
  paid?: boolean;
  lastRead?: string;
  isReading?: boolean;
  progress?: number;
}

export interface CustomStyleProps {
  margin?: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
}
