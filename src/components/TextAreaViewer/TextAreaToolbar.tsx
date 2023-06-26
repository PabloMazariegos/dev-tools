import { TextAreaType } from '@/types/text-area';
import { Button, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { BiPaste } from 'react-icons/bi';

interface TextAreaToolbarProps {
  type: TextAreaType;
  onDeleteClick?: () => void;
  onCopyPasteClick?: (type: TextAreaType) => void;
}

const TextAreaToolbar: React.FC<TextAreaToolbarProps> = ({ type, onDeleteClick, onCopyPasteClick }) => {
  const headingText = type === 'INPUT' ? 'Input' : 'Output';
  const buttonTypeText = type === 'INPUT' ? 'Pegar' : 'Copiar';
  const buttonIcon = type === 'INPUT' ? BiPaste : AiOutlineCopy;

  const handleOnCopyPaste = () => {
    if(onCopyPasteClick){
      onCopyPasteClick(type)
    }
  }

  return (
    <Flex alignItems='center' justifyContent='space-between' width='100%'>
      <Text>{headingText}</Text>

      <Flex alignItems='center' gap={2}>
        <Button leftIcon={<Icon as={buttonIcon} boxSize='5' onClick={handleOnCopyPaste} />} fontSize='xs'>
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
  );
};

export default TextAreaToolbar;
