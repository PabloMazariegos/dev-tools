import { Flex, FlexProps, Icon, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps extends FlexProps {
  icon: IconType;
  label: string;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, link, paddingLeft }) => {
  return (
    <Link
      as={NavLink}
      to={link}
      end
      style={{ textDecoration: 'none' }}
      _activeLink={{
        div: { backgroundColor: 'blue.600' }
      }}
    >
      <Flex
        alignItems='center'
        gap='2'
        padding='2'
        paddingLeft={paddingLeft}
        _hover={{ md: { backgroundColor: 'blackAlpha.600' } }}
      >
        <Icon as={icon}></Icon>
        <Text fontSize='md'>{label}</Text>
      </Flex>
    </Link>
  );
};

export default SidebarItem;
