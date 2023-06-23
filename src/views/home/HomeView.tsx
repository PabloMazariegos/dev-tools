import { SidebarItem } from '@/types/';
import { sidebarData } from '@/config/sidebar.config';
import { Card, CardBody, CardHeader, Center, Heading, Icon, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const sidebarItems = (): Array<SidebarItem> => {
  let items: Array<SidebarItem> = [];

  sidebarData.forEach((category) => {
    category.items.forEach((item) => {
      items.push(item);
    });
  });

  return items;
};

const Home = () => {
  return (
    <>
      <Heading size='xl' marginBottom='8'>
        All Tools
      </Heading>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {sidebarItems().map((item) => (
          <Link as={NavLink} key={item.label} to={item.link} style={{ textDecoration: 'none' }}>
            <Card size='sm' _hover={{ backgroundColor: 'blue.600' }} cursor='pointer' height='100%' borderRadius='xl'>
              <CardHeader backgroundColor='blackAlpha.200'>
                <Center flexDirection='column' gap='5' padding='3'>
                  <Icon as={item.icon} boxSize='14'></Icon>
                  <Text fontSize='lg' fontWeight='bold'>
                    {item.label}
                  </Text>
                </Center>
              </CardHeader>
              <CardBody>
                <Text fontSize='sm'>{item.description}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
