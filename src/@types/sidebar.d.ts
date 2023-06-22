import { IconType } from 'react-icons';

export interface SidebarConfiguration {
  label: string;
  icon: IconType;
  items: Array<SidebarItemProps>;
}

interface SidebarItem {
  label: string;
  icon: IconType;
  link: string;
}
