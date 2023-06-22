import { Drawer, DrawerContent } from '@chakra-ui/react';

import SidebarContent from '../SidebarContent/SidebarContent';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  return (
    <Drawer
      autoFocus={false}
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size='xs'
    >
      <DrawerContent>
        <SidebarContent onClose={onClose} />
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
