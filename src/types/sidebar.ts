import type { IconType } from 'react-icons';

export type optional<T> = T | null;

export type SidebarCategory = {
  label: string;
  icon: IconType;
  items: SidebarItem[];
};

export type SidebarItem = {
  label: string;
  icon: IconType;
  link: string;
  description?: optional<string>;
};

export type Sidebar = SidebarCategory[];
