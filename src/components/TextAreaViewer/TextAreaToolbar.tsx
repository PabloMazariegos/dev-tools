import { TextAreaType } from '@/types/text-area';
import { Button, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { BiPaste } from 'react-icons/bi';

interface TextAreaToolbarProps {
  type: TextAreaType;
}

const TextAreaToolbar: React.FC<TextAreaToolbarProps> = ({ type }) => {
  const headingText = type === 'INPUT' ? 'Input' : 'Output';
  const buttonTypeText = type === 'INPUT' ? 'Pegar' : 'Copiar';
  const buttonIcon = type === 'INPUT' ? BiPaste : AiOutlineCopy;

  return (
    <Flex alignItems='center' justifyContent='space-between' width='100%'>
      <Text>{headingText}</Text>

      <Flex alignItems='center' gap={2}>
        <Button leftIcon={<Icon as={buttonIcon} boxSize='5' />} fontSize='xs'>
          {buttonTypeText}
        </Button>

        {type === 'INPUT' && (
          <IconButton
            aria-label='delete'
            icon={<Icon as={AiOutlineClose} boxSize='5' />}
          ></IconButton>
        )}
      </Flex>
    </Flex>
  );
};

export default TextAreaToolbar;
