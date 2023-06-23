export const ENCODE_DECODE_VALUES = ['ENCODE', 'DECODE'] as const;
export type EncodeDecode = (typeof ENCODE_DECODE_VALUES)[number];

export type ConfiguratorItemValue = EncodeDecode;

export type ConfiguratorItem = {
  key: string;
  value: ConfiguratorItemValue;
};

export type Configurator = ConfiguratorItem[];

export function isConfiguratorItemValue(value: any): value is ConfiguratorItemValue {
  return ENCODE_DECODE_VALUES.includes(value as EncodeDecode);
}
