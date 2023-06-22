import { IconType } from 'react-icons';

export interface SidebarCategoryProps {
  label: string;
  icon: IconType;
  items: Array<SidebarItemProps>;
}

interface SidebarItemProps {
  label: string;
  icon: IconType;
  link: string;
}
