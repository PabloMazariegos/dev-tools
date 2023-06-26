import React from 'react';
import { Box, Button, Flex, Icon, IconButton, SimpleGrid, Textarea, Text } from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { BiPaste } from 'react-icons/bi';

export type TextAreaType = 'INPUT' | 'OUTPUT';

export interface TextAreaProps {
  type: TextAreaType;
  monospaceFont?: boolean;
  content?: string;
  onChange?: (value: string) => void;
  onDeleteClick?: () => void;
  onCopyPasteClick?: () => void;
}

const TextAreaViewer: React.FC<TextAreaProps> = ({
  type,
  monospaceFont = true,
  content,
  onChange,
  onDeleteClick,
  onCopyPasteClick
}) => {
  const toolbarConfiguration = {
    headingText: type === 'INPUT' ? 'Input' : 'Output',
    buttonTypeText: type === 'INPUT' ? 'Paste' : 'Copy',
    buttonIcon: type === 'INPUT' ? BiPaste : AiOutlineCopy,
    areaFontFamily: monospaceFont ? `'JetBrains Mono', monospace` : 'inherit';
    
  }
  
  const handleOnChange = (event: string) => {
    if(onChange){
      onChange(event)
    }
  }

  const handleOnCopyPaste = () => {
    if(onCopyPasteClick){
      onCopyPasteClick()
    }
  }

  return (
    <SimpleGrid columns={1} spacing={2}>
      <Flex alignItems='center' justifyContent='space-between' width='100%'>
      <Text>{toolbarConfiguration.headingText}</Text>

      <Flex alignItems='center' gap={2}>
        <Button onClick={handleOnCopyPaste} leftIcon={<Icon as={toolbarConfiguration.buttonIcon} boxSize='5' />} fontSize='xs'>
          {toolbarConfiguration.buttonTypeText}
        </Button>

        {type === 'INPUT' && (
          <IconButton
            onClick={onDeleteClick}
            aria-label='delete'
            icon={<Icon as={AiOutlineClose} boxSize='5' />}
          />
        )}
      </Flex>
    </Flex>
      <Box>
        <Textarea
          fontFamily={toolbarConfiguration.areaFontFamily}
          fontSize='sm'
          minHeight='36'
          onChange={event => handleOnChange(event.target.value)}
          value={content}
        ></Textarea>
      </Box>
    </SimpleGrid>
  );
};

export default TextAreaViewer;
