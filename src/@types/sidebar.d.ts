import { IconType } from 'react-icons';

interface SidebarConfiguration {
  label: string;
  icon: IconType;
  items: Array<SidebarItem>;
}

interface SidebarItem {
  label: string;
  icon: IconType;
  link: string;
  description?: string
}
