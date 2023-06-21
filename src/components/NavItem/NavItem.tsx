import { FlexProps, Link, Flex, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  href?: string;
}

const NavItem = ({ icon, children, href, ...FlexProps }: NavItemProps) => {
  console.log(href);
  return (
    <Link
      as={NavLink}
      to={href}
      end
      _activeLink={{
        backgroundColor: 'blue.600'
      }}
      style={{
        textDecoration: 'none'
      }}
    >
      <Flex
        p="3"
        width="full"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.600',
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
