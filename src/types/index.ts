import { IconType } from 'react-icons';

export interface SidebarConfiguration {
  label: string;
  icon: IconType;
  items: Array<SidebarItem>;
}

export interface SidebarItem {
  label: string;
  icon: IconType;
  link: string;
  description?: string;
}

export enum ConfiguratorSelectorValue {
  ENCODE = 'ENCODE',
  DECODE = 'DECODE'
}

export type ConfiguratorOptionType = ConfiguratorSelectorValue | string;

export interface ConfiguratorSelectorOptions {
  key: string;
  value: ConfiguratorOptionType;
}
