export interface RegexMatch {
  value: string;
  initIndex: number;
  lastIndex: number;
  color: string;
}

export interface HighlightTag {
  children: React.ReactNode;
}
