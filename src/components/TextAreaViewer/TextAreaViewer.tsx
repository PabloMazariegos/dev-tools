import React from 'react';
import { Box, SimpleGrid, Textarea } from '@chakra-ui/react';
import { TextAreaProps } from '@/types/text-area';
import TextAreaToolbar from './TextAreaToolbar';

const TextAreaViewer: React.FC<TextAreaProps> = ({
  type,
  monospaceFont = true,
  content,
  onChange
}) => {
  const areaFontFamily = monospaceFont ? `'JetBrains Mono', monospace` : 'inherit';

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(onChange){
      onChange(event.target.value)
    }
  }

  return (
    <SimpleGrid columns={1} spacing={2}>
      <TextAreaToolbar type={type}></TextAreaToolbar>
      <Box>
        <Textarea
          fontFamily={areaFontFamily}
          fontSize='sm'
          minHeight='36'
          onChange={handleOnChange}
          value={content}
        ></Textarea>
      </Box>
    </SimpleGrid>
  );
};

export default TextAreaViewer;
