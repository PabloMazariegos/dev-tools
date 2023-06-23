import { Box, Container, useDisclosure } from '@chakra-ui/react';

import SidebarContent from '@/components/SidebarContent/SidebarContent';
import MobileNav from '@/components/MobileNav/MobileNav';
import MobileDrawer from '@/components/MobileNav/MobileDrawer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH='100vh' bg='gray.900'>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: '80' }} paddingTop='10' paddingBottom='10'>
        <Container maxW='container.lg'>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
