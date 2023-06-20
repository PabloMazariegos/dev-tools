import { ReactNode } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';

import SidebarContent from './components/SidebarContent.tsx/SidebarContent';
import MobileNav from './components/MobileNav/MobileNav';
import MobileDrawer from './components/MobileNav/MobileDrawer';

export default function App({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.900">
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: '80' }} p="4">
        {children}
      </Box>
    </Box>
  );
}
