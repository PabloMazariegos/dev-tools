import React from 'react';
import { Box, Button, Flex, Icon, IconButton, SimpleGrid, Textarea, Text } from '@chakra-ui/react';
import { TextAreaProps } from '@/types/text-area';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { BiPaste } from 'react-icons/bi';

const TextAreaViewer: React.FC<TextAreaProps> = ({
  type,
  monospaceFont = true,
  content,
  onChange,
  onDeleteClick,
  onCopyPasteClick
}) => {
  const headingText = type === 'INPUT' ? 'Input' : 'Output';
  const buttonTypeText = type === 'INPUT' ? 'Paste' : 'Copy';
  const buttonIcon = type === 'INPUT' ? BiPaste : AiOutlineCopy;
  const areaFontFamily = monospaceFont ? `'JetBrains Mono', monospace` : 'inherit';

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
      <Text>{headingText}</Text>

      <Flex alignItems='center' gap={2}>
        <Button onClick={handleOnCopyPaste} leftIcon={<Icon as={buttonIcon} boxSize='5' />} fontSize='xs'>
          {buttonTypeText}
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
          fontFamily={areaFontFamily}
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
