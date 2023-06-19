import { Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react';

import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false }, { ssr: false });
  const { isOpen, onClose, onToggle } = useDisclosure({ defaultIsOpen: !isMobile });

  return (
    <Flex>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Flex direction='column' width='full'>
        <Navbar onToggle={onToggle} />
      </Flex>
    </Flex>
  );
}

export default App;
