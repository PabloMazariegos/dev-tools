import SideBarItems from './SidebarItems';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<props> = ({ isOpen, onClose }) => {
  const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false });
  const openDrawer = (isOpen && isMobile) || false;

  return (
    <>
      <Flex
        as="nav"
        direction="column"
        bg="blackAlpha.300"
        height="100vh"
        px={4}
        py={5}
        width={{ base: '300px', md: '400px' }}
        display={{ base: isMobile ? 'none' : isOpen ? 'block' : 'none' }}>
        <Stack>
          <SideBarItems />
        </Stack>
      </Flex>
      <Drawer isOpen={openDrawer} placement="left" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dev Tools</DrawerHeader>

          <DrawerBody>
            <Stack>
              <SideBarItems />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
