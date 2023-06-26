import React from 'react';
import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import ConfigurationSelector from '@/components/ConfigurationSelector/ConfigurationSelector';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { encodeDecodeConfiguratorItems } from '@/config/configurator-selector.config';
import { EncodeDecode } from '@/types/configurator-selector';
import { encodeBase64, decodeBase64 } from '@/utils/base64.utils';
import { useToast } from '@chakra-ui/react';

const base64TextView = () => {
  const toast = useToast();
  const [configuration, setConfiguration] = React.useState<EncodeDecode>('DECODE');
  const [textAreaInput, setTextAreaInput] = React.useState<string>('');
  const [textAreaOutput, setTextAreaOutput] = React.useState<string>('');

  const handleConfigurationChange = (value: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConfiguration = value.target.value as EncodeDecode;

    const validSelectedConfiguration =
      selectedConfiguration &&
      (selectedConfiguration === 'ENCODE' || selectedConfiguration === 'DECODE');

    if (validSelectedConfiguration) {
      setConfiguration(selectedConfiguration);
    }
  };

  React.useEffect(() => {
    let output = '';
    switch (configuration) {
      case 'ENCODE':
        output = encodeBase64(textAreaInput);
        break;

      case 'DECODE':
        output = decodeBase64(textAreaInput);
        break;
    }

    setTextAreaOutput(output);
  }, [textAreaInput, configuration]);

  const handleTextAreaInputOnChange = (value: string) => {
    setTextAreaInput(value);
  };

  const handlePasteClick = async () => {
    const clipboardText = await navigator.clipboard.readText();

    if (clipboardText) {
      setTextAreaInput(textAreaInput + clipboardText);
    }
  };

  const handleOnCopyClick = async () => {
    navigator.clipboard.writeText(textAreaOutput);

    toast({
      title: 'Copied!',
      description: 'Base64 output copied to clipboard',
      status: 'success',
      isClosable: true,
      position: 'bottom-right',
      duration: 4000
    });
  };

  const onDeleteClick = () => {
    setTextAreaInput('');
  };

  const configurationHint =
    configuration === 'DECODE'
      ? 'Decode: Convert base64 to text'
      : 'Encode: Convert text to base64';

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
            hint={configurationHint}
            options={encodeDecodeConfiguratorItems}
            onChange={handleConfigurationChange}
            value={configuration}
          />
        </Box>
        <Box>
          <TextAreaViewer
            type='INPUT'
            onChange={handleTextAreaInputOnChange}
            onDeleteClick={onDeleteClick}
            content={textAreaInput}
            onCopyPasteClick={handlePasteClick}
          ></TextAreaViewer>
        </Box>
        <Box>
          <TextAreaViewer
            type='OUTPUT'
            content={textAreaOutput}
            onCopyPasteClick={handleOnCopyClick}
          ></TextAreaViewer>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default base64TextView;
