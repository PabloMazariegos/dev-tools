import { sidebarData } from '@/config/sidebar.config';
import { AiOutlineHome } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { Flex, Icon, Input, InputGroup, InputRightElement, Divider, Text, VStack, Link } from '@chakra-ui/react';

const SideBarItems = () => {
  return (
    <>
      <InputGroup marginBottom={2}>
        <InputRightElement pointerEvents="none">
          <Icon as={BsSearch} />
        </InputRightElement>
        <Input type="text" placeholder="Type to search for tools..." />
      </InputGroup>

      <VStack p={3}>
        <Link display="flex" width="full" gap={3}>
          <Icon as={AiOutlineHome} boxSize={5}></Icon>
          <Text fontWeight="bold" fontSize="medium">
            All tools
          </Text>
        </Link>
        <Divider />

        {sidebarData.map((category) => (
          <Flex key={category.slug} width="full" direction="column" alignItems="center" gap={3} minHeight="60px">
            <Flex alignItems="center" width="full" gap={3} paddingTop={5}>
              <Icon as={category.icon} boxSize={5}></Icon>
              <Text fontWeight="bold" fontSize="medium">
                {category.label}
              </Text>
            </Flex>

            {category.items.map((item) => (
              <Link key={item.slug} display="flex" width="full" gap={3} paddingLeft={6} paddingBottom={1} paddingTop={2}>
                <Icon as={item.icon} boxSize={5}></Icon>
                <Text fontSize="medium">{item.label}</Text>
              </Link>
            ))}
          </Flex>
        ))}
      </VStack>
    </>
  );
};

export default SideBarItems;
