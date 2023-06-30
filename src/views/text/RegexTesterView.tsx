import React from 'react';
import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  SimpleGrid,
  Tag,
  Text,
  useToast
} from '@chakra-ui/react';
import Highlighter from 'react-highlight-words';
import { HighlightTag } from '@/types/regex-tester';

const regexTester = () => {
  const toast = useToast();
  const [regexValue, setRegexValue] = React.useState('');
  const [textAreaInput, setTextAreaValue] = React.useState('');
  const [matches, setMatches] = React.useState<RegExp>(new RegExp(''));

  const textAreaContainerRef = React.useRef<HTMLDivElement>(null);

  let timeoutId: ReturnType<typeof setTimeout>;

  React.useEffect(() => {
    let regexp: RegExp | null = null;
    try {
      regexp = new RegExp(regexValue, 'g');
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'You enter an invalid RegEx please check it',
        status: 'error',
        isClosable: true,
        position: 'bottom-right',
        duration: 6000
      });
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (regexp && textAreaInput && regexValue) {
        setMatches(regexp);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [regexValue, textAreaInput]);

  const handleOnRegexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let plainValue = value;

    if (value.startsWith('/')) {
      plainValue = plainValue.substring(1);
    }

    if (value.endsWith('/g')) {
      plainValue = plainValue.substring(0, plainValue.length - 2);
    }

    setRegexValue(plainValue);
  };

  const handleOnTextAreaChange = (value: string) => {
    setTextAreaValue(value);
  };

  const highlightTag = ({ children }: HighlightTag) => (
    <Tag colorScheme='green' size='md'>
      {children}
    </Tag>
  );

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Box>
        <Heading size='xl' marginBottom='8'>
          RegEx Tester <Tag>BETA</Tag>
        </Heading>
      </Box>
      <Flex direction='column' gap={3}>
        <Text>RegEx</Text>
        <InputGroup>
          <InputLeftAddon children='/' />
          <Input value={regexValue} onChange={handleOnRegexChange} fontFamily='JetBrains Mono, monospace' />
          <InputRightAddon children='/g' />
        </InputGroup>
      </Flex>
      <Box ref={textAreaContainerRef}>
        <TextAreaViewer
          headingText='Text'
          deleteAction
          content={textAreaInput}
          onChange={handleOnTextAreaChange}
          minHeight='32'
        />
      </Box>
      <Flex direction='column' gap={3}>
        <Text>Evaluation</Text>
        <Box border='1px' borderColor='gray.500' borderStyle='solid' minHeight='32' padding='5'>
          <Highlighter
            caseSensitive
            textToHighlight={textAreaInput}
            searchWords={[matches]}
            highlightTag={highlightTag}
          />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default regexTester;
