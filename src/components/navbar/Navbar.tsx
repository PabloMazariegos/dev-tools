import { Flex, Heading, Button, Icon, Stack } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

interface props {
  onToggle: () => void;
}

const NavBar: React.FC<props> = ({ onToggle }) => {
  return (
    <Flex bg='blackAlpha.300' px={5} py={4} alignItems='center'>
      <Stack direction='row'>
        <Button onClick={onToggle}>
          <Icon as={GiHamburgerMenu}></Icon>
        </Button>
        <Heading as='h3' size='lg'>
          Dev Tools
        </Heading>
      </Stack>
    </Flex>
  );
};

export default NavBar;
