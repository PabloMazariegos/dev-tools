import ConfigurationSelector from '@/components/ConfigurationSelector/ConfigurationSelector';
import { Heading } from '@chakra-ui/react';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { encodeDecodeConfiguratorItems } from '@/config/configurator-selector.config';
import { EncodeDecode } from '@/types/configurator-selector';
import React from 'react';

const base64TextView = () => {
  const [configuration, setConfiguration] = React.useState<EncodeDecode>('ENCODE');

  const handleOnChange = (value: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConfiguration = value.target.value as EncodeDecode;

    if (selectedConfiguration && (selectedConfiguration === 'ENCODE' || selectedConfiguration === 'DECODE')) {
      setConfiguration(selectedConfiguration);
    }
  };

  return (
    <>
      <Heading
        size='xl'
        marginBottom='8'
      >
        Base64 to plain text {configuration}
      </Heading>

      <ConfigurationSelector
        icon={HiArrowsRightLeft}
        label='Configuration'
        hint='Select the conversion mode'
        options={encodeDecodeConfiguratorItems}
        onChange={handleOnChange}
        value={configuration}
      />
    </>
  );
};

export default base64TextView;
