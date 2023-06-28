import React from 'react';
import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import ConfigurationSelector from '@/components/ConfigurationSelector/ConfigurationSelector';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { encodeDecodeConfiguratorItems } from '@/config/configurator-selector.config';
import { EncodeDecode } from '@/types/configurator-selector';
import { encodeBase64, decodeBase64 } from '@/utils/base64.utils';
import { useClipboard } from '@/hooks/useClipboard';

const base64TextView = () => {
  const [configuration, setConfiguration] = React.useState<EncodeDecode>('DECODE');
  const [textAreaInput, setTextAreaInput] = React.useState<string>('');
  const [textAreaOutput, setTextAreaOutput] = React.useState<string>('');
  const { onCopy, onPaste } = useClipboard();

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

  const handleConfigurationChange = (value: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConfiguration = value.target.value as EncodeDecode;

    if (selectedConfiguration) {
      setConfiguration(selectedConfiguration);
    }
  };

  const handleTextAreaInputOnChange = (value: string) => {
    setTextAreaInput(value);
  };

  const handleOnPasteClick = async () => {
    const pasteText = await onPaste();
    setTextAreaInput(textAreaInput + pasteText);
  };

  const handleOnCopyClick = async () => {
    onCopy(textAreaOutput);
  };

  const onDeleteClick = () => {
    setTextAreaInput('');
  };

  const configurationHint =
    configuration === 'DECODE' ? 'Decode: Convert base64 to text' : 'Encode: Convert text to base64';

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
            headingText='Input'
            onChange={handleTextAreaInputOnChange}
            onDelete={onDeleteClick}
            onPaste={handleOnPasteClick}
            content={textAreaInput}
            pasteAction
            deleteAction
          ></TextAreaViewer>
        </Box>
        <Box>
          <TextAreaViewer
            copyAction
            headingText='Output'
            content={textAreaOutput}
            onCopy={handleOnCopyClick}
          ></TextAreaViewer>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default base64TextView;
