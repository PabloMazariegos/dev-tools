import { BoxProps, Flex, CloseButton, Box, Text, Icon, Divider } from '@chakra-ui/react';
import { sidebarData } from '@/config/sidebar.config';
import { AiOutlineHome } from 'react-icons/ai';

import NavItem from '../NavItem/NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...BoxProps }: SidebarProps) => {
  return (
    <Box
      bg="gray.900"
      borderRight="1px"
      borderRightColor="gray.700"
      width={{ base: 'full', md: '80' }}
      pos="fixed"
      height="full"
      overflowY="auto"
      paddingBottom="5"
      {...BoxProps}
    >
      <Flex height="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Dev Tools
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <NavItem icon={AiOutlineHome} marginBottom="2">
        <Text fontSize="sm" fontWeight="bold">
          All Tools
        </Text>
      </NavItem>

      <Divider />

      {sidebarData.map((category) => (
        <Flex direction="column" key={category.label} width="full" marginTop="4" borderRadius="lg">
          <Flex alignItems="center" gap="2" paddingLeft="7">
            <Icon as={category.icon}></Icon>
            <Text fontWeight="bold" fontSize="md">
              {category.label}
            </Text>
          </Flex>

          {category.items.map((item) => (
            <NavItem key={item.label} icon={item.icon} paddingLeft="9">
              <Text fontSize="sm">{item.label}</Text>
            </NavItem>
          ))}
        </Flex>
      ))}
    </Box>
  );
};

export default SidebarContent;
