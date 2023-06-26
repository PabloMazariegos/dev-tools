import { Box, Card, CardBody, Flex, Icon, Spacer, Switch, Text } from '@chakra-ui/react';
import { type IconType } from 'react-icons';

interface ConfiguratorActivatorProps {
  icon: IconType;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const ConfiguratorActivator: React.FC<ConfiguratorActivatorProps> = ({ icon, label, value, onChange }) => {
  return (
    <Card>
      <CardBody>
        <Flex flexWrap='wrap' gap={5}>
          <Box>
            <Flex alignItems='center' gap='3'>
              <Icon as={icon}></Icon>
              <Text>{label}</Text>
            </Flex>
          </Box>
          <Spacer />

          <Switch size='md' isChecked={value} onChange={(event) => onChange(event.target.checked)} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ConfiguratorActivator;
