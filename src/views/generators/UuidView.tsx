import React from 'react';
import ConfiguratorActivator from '@/components/ConfiguratorActivator/ConfiguratorActivator';
import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import {
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper
} from '@chakra-ui/react';
import { RxLetterCaseUppercase } from 'react-icons/rx';
import { v4 as uuidv4 } from 'uuid';
import { useClipboard } from '@/hooks/useClipboard';

const UuidView = () => {
  const [isUpperCase, setIsUpperCase] = React.useState<boolean>(false);
  const [totalUuids, setTotalUuids] = React.useState<number>(1);
  const [textAreaOutput, setTextAreaOuput] = React.useState<string>('');
  const { onCopy } = useClipboard();

  React.useEffect(() => {
    if (textAreaOutput.length > 0) {
      if (isUpperCase) {
        setTextAreaOuput(textAreaOutput.toUpperCase());
      } else {
        setTextAreaOuput(textAreaOutput.toLocaleLowerCase());
      }
    }
  }, [isUpperCase]);

  const handleUpperCaseOnChange = (value: boolean) => {
    setIsUpperCase(value);
  };

  const handleTotalUuidOnChange = (valueAsString: string, valueAsNumber: number) => {
    setTotalUuids(valueAsNumber);
  };

  const generateUuids = () => {
    let output: string[] = [];

    for (let i = 0; i < totalUuids; i++) {
      output.push(uuidv4());
    }

    if (isUpperCase) {
      output = output.map((item) => item.toUpperCase());
    }

    setTextAreaOuput(output.join('\n'));
  };

  const handleOnCopyClick = async () => {
    onCopy(textAreaOutput);
  };

  return (
    <>
      <SimpleGrid columns={1} spacing={10}>
        <Box>
          <Heading size='xl'>Generate UUID</Heading>
        </Box>
        <Box>
          <ConfiguratorActivator
            icon={RxLetterCaseUppercase}
            label='Uppercase'
            value={isUpperCase}
            onChange={handleUpperCaseOnChange}
          />{' '}
        </Box>
        <Box>
          <Text>Generate</Text>
          <Flex marginTop={3} alignItems='center' gap={5}>
            <Button colorScheme='blue' onClick={generateUuids}>
              Generate UUID(s)
            </Button>
            <span>x</span>
            <NumberInput maxWidth='24' value={totalUuids} onChange={handleTotalUuidOnChange} min={1} max={10}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>
        <Box>
          <TextAreaViewer
            headingText='Output'
            copyAction
            content={textAreaOutput}
            onCopy={handleOnCopyClick}
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default UuidView;
