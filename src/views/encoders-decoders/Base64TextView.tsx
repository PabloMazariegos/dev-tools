import React from 'react';
import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import ConfigurationSelector from '@/components/ConfigurationSelector/ConfigurationSelector';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { HiArrowsRightLeft } from 'react-icons/hi2';

import { encodeDecodeConfiguratorItems } from '@/config/configurator-selector.config';
import { EncodeDecode } from '@/types/configurator-selector';

import { encodeBase64, decodeBase64 } from '@/utils/base64.utils';

const base64TextView = () => {
  const [configuration, setConfiguration] = React.useState<EncodeDecode>('ENCODE');
  const [textAreaInput, setTextAreaInput] = React.useState<string>('');
  const [textAreaOutput, setTextAreaOutput] = React.useState<string>('');

  const handleConfigurationChange = (value: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConfiguration = value.target.value as EncodeDecode;

    if (
      selectedConfiguration &&
      (selectedConfiguration === 'ENCODE' || selectedConfiguration === 'DECODE')
    ) {
      setConfiguration(selectedConfiguration);
      clearTextAreas();
    }
  };

  const handleTextAreaInputOnChange = (value: string) => {
    setTextAreaInput(value);

    let output = '';
    switch (configuration) {
      case 'ENCODE':
        output = encodeBase64(value);
        break;

      case 'DECODE':
        output = decodeBase64(value);
        break;
    }

    setTextAreaOutput(output);
  };

  const clearTextAreas = () => {
    setTextAreaInput('')
    setTextAreaOutput('')
  }

  return (
    <>
      <SimpleGrid columns={1} spacing={10}>
        <Box>
          <Heading size='xl'>Base64 Text</Heading>
        </Box>
        <Box>
          <ConfigurationSelector
            icon={HiArrowsRightLeft}
            label='Configuration'
            hint='Select the conversion mode'
            options={encodeDecodeConfiguratorItems}
            onChange={handleConfigurationChange}
            value={configuration}
          />
        </Box>
        <Box>
          <TextAreaViewer
            type='INPUT'
            onChange={handleTextAreaInputOnChange}
            content={textAreaInput}
          ></TextAreaViewer>
        </Box>
        <Box>
          <TextAreaViewer type='OUTPUT' content={textAreaOutput}></TextAreaViewer>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default base64TextView;
