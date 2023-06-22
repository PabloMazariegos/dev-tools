import { FlexProps, Flex, IconButton, Text } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...FlexProps }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg='gray.900'
      borderBottomWidth='1px'
      borderBottomColor='gray.700'
      justifyContent='flex-start'
      color='white'
      {...FlexProps}
    >
      <IconButton variant='outline' onClick={onOpen} aria-label='open menu' icon={<FiMenu color='white' />} />

      <Text fontSize='2xl' ml='8' fontWeight='bold'>
        Dev Tools
      </Text>
    </Flex>
  );
};

export default MobileNav;
