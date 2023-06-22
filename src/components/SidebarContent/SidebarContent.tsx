import { BoxProps, Flex, CloseButton, Box, Text, Icon, Divider } from '@chakra-ui/react';
import { sidebarData } from '@/config/sidebar.config';
import { AiOutlineHome } from 'react-icons/ai';

import NavItem from '../NavItem/NavItem';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...BoxProps }: SidebarProps) => {
  return (
    <Box
      bg='gray.900'
      borderRight='1px'
      borderRightColor='gray.700'
      width={{ base: 'full', md: '80' }}
      pos='fixed'
      height='full'
      overflowY='auto'
      paddingBottom='5'
      {...BoxProps}
    >
      <Flex height='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontWeight='bold' color='white'>
          Dev Tools
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} color='white' />
      </Flex>

      <Box>
        <SidebarItem paddingLeft='6' icon={AiOutlineHome} label='All Tools' link='/' />
      </Box>

      <Divider />

      {sidebarData.map((category) => (
        <Box>
          <Flex alignItems='center' gap='2' paddingLeft='6' paddingBottom='1' marginTop='4'>
            <Icon as={category.icon} />
            <Text fontSize='md' fontWeight='bold'>
              {category.label}
            </Text>
          </Flex>

          {category.items.map((item) => (
            <SidebarItem
              paddingLeft='12'
              key={item.label}
              icon={item.icon}
              label={item.label}
              link={item.link}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default SidebarContent;
