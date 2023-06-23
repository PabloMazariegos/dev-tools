import React from 'react';
import ConfigurationSelector from '@/components/ConfigurationSelector/ConfigurationSelector';
import { Heading } from '@chakra-ui/react';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { ConfiguratorSelectorValue } from '@/types/';
import { EncodeDecodeConfiguration } from '@/config/encode-decode.config';

const { DECODE } = ConfiguratorSelectorValue;

const base64TextView = () => {
  const [configuration, setConfiguration] = React.useState<ConfiguratorSelectorValue>(DECODE);

  const handleOnChange = (value: string) => {
    const valueEnum = value as keyof typeof ConfiguratorSelectorValue;
    const configurationValue = ConfiguratorSelectorValue[valueEnum];

    if (!configurationValue) {
      return;
    }

    setConfiguration(configurationValue);
  };

  return (
    <>
      <Heading size='xl' marginBottom='8'>
        Encode and decode Base64 to plain text
      </Heading>

      <ConfigurationSelector
        icon={HiArrowsRightLeft}
        label='Configuration'
        hint='Select the conversion mode'
        options={EncodeDecodeConfiguration}
        onChange={handleOnChange}
        value={configuration}
      />
    </>
  );
};

export default base64TextView;
