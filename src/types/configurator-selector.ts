export type EncodeDecode = 'ENCODE' | 'DECODE';

export type ConfiguratorItemValue = EncodeDecode;

export type ConfiguratorItem = {
  key: string;
  value: ConfiguratorItemValue;
};
