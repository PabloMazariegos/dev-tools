import React from 'react';
import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { hashSync } from 'bcrypt-ts/browser';
import { useClipboard } from '@/hooks/useClipboard';

const bcryptView = () => {
  const [password, setPassword] = React.useState('');
  const [rounds, setRounds] = React.useState(10);
  const [textAreaOutput, setTextAreaOuput] = React.useState('');
  const { onCopy } = useClipboard();

  const handleRoundsChange = (valueAsString: string, valueAsNumber: number) => {
    setRounds(valueAsNumber);
  };

  const generateBcrypt = () => {
    if (password) {
      const hash = hashSync(password, rounds);
      setTextAreaOuput(hash);
    }
  };

  const handleOnCopyClick = () => {
    if (textAreaOutput) {
      onCopy(textAreaOutput);
    }
  };

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Box>
        <Heading size='xl'>Bcrypt</Heading>
      </Box>
      <Flex gap={5} flexWrap='wrap' alignItems='end' marginBottom='9'>
        <Box width={{ base: 'full', lg: 'md' }}>
          <Text>Password</Text>
          <Input type='text' value={password} onChange={(event) => setPassword(event.target.value)} />
        </Box>
        <Box width={{ base: 'full', lg: '90px' }}>
          <Text>Rounds</Text>
          <NumberInput value={rounds} onChange={handleRoundsChange} min={6} max={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box width={{ base: 'full', lg: '150px' }}>
          <Button colorScheme='blue' onClick={generateBcrypt} width='full'>
            Bcrypt
          </Button>
        </Box>
      </Flex>
      <Box>
        <TextAreaViewer
          headingText='Output'
          copyAction
          content={textAreaOutput}
          onCopy={handleOnCopyClick}
        />
      </Box>
    </SimpleGrid>
  );
};

export default bcryptView;
