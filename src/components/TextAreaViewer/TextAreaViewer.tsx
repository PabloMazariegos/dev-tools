import React from 'react';
import { Box, Button, Flex, Icon, IconButton, SimpleGrid, Textarea, Text } from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { BiPaste } from 'react-icons/bi';

type ButtonActions = 'COPY' | 'PASTE';

interface TextAreaProps {
  monospaceFont?: boolean;
  content?: string;
  onChange?: (value: string) => void;
  onCopy?: () => void;
  onPaste?: () => void;
  onDelete?: () => void;
  allActions?: boolean;
  copyAction?: boolean;
  pasteAction?: boolean;
  deleteAction?: boolean;
  headingText: string;
}

const TextAreaViewer: React.FC<TextAreaProps> = ({
  monospaceFont = true,
  content,
  onChange,
  onDelete,
  onCopy,
  onPaste,
  allActions,
  copyAction,
  pasteAction,
  deleteAction,
  headingText
}) => {
  const toolbarConfiguration = {
    areaFontFamily: monospaceFont ? `'JetBrains Mono', monospace` : 'inherit'
  };

  const handleOnChange = (event: string) => {
    if (onChange) {
      onChange(event);
    }
  };

  const clipboardButton = (type: ButtonActions) => (
    <Button
      key={type}
      onClick={type === 'COPY' ? onCopy : onPaste}
      leftIcon={<Icon as={type === 'COPY' ? AiOutlineCopy : BiPaste} boxSize='5' />}
      fontSize='xs'
    >
      {type === 'COPY' ? 'Copy' : 'Paste'}
    </Button>
  );

  const deleteButton = () => (
    <IconButton
      key='delete'
      onClick={onDelete}
      aria-label='delete'
      icon={<Icon as={AiOutlineClose} boxSize='5' />}
    />
  );

  return (
    <SimpleGrid columns={1} spacing={2}>
      <Flex alignItems='center' justifyContent='space-between' width='100%'>
        <Text>{headingText}</Text>

        <Flex alignItems='center' gap={2}>
          {allActions && [clipboardButton('COPY'), clipboardButton('PASTE'), deleteButton()]}
          {copyAction && clipboardButton('COPY')}
          {pasteAction && clipboardButton('PASTE')}
          {deleteAction && deleteButton()}
        </Flex>
      </Flex>
      <Box>
        <Textarea
          fontFamily={toolbarConfiguration.areaFontFamily}
          fontSize='sm'
          minHeight='52'
          onChange={(event) => handleOnChange(event.target.value)}
          value={content}
        ></Textarea>
      </Box>
    </SimpleGrid>
  );
};

export default TextAreaViewer;
