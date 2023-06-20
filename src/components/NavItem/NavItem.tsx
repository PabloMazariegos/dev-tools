import { FlexProps, Link, Flex, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}

const NavItem = ({ icon, children, ...FlexProps }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        p="3"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...FlexProps}
      >
        {icon && (
          <Icon
            mr="2"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}

        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
