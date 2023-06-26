export type TextAreaType = 'INPUT' | 'OUTPUT';

export interface TextAreaProps {
  type: TextAreaType;
  monospaceFont?: boolean;
  content?: string;
  onChange?: (value: string) => void;
  onDeleteClick?: () => void;
  onCopyPasteClick?: () => void;
}
