import { Box, Card, CardBody, Flex, Icon, Select, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ConfiguratorItem, ConfiguratorItemValue } from '@/types/configurator-selector';

interface ConfigurationSelectorProps {
  icon: IconType;
  label: string;
  hint?: string;
  options: ConfiguratorItem[];
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
  value: ConfiguratorItemValue;
}

const ConfigurationSelector: React.FC<ConfigurationSelectorProps> = ({
  icon,
  label,
  options,
  hint,
  onChange,
  value
}) => {
  return (
    <Card>
      <CardBody>
        <Flex justifyContent='space-between'>
          <Box>
            <Flex
              alignItems='center'
              gap='3'
            >
              <Icon
                as={icon}
                boxSize='5'
              ></Icon>
              <Text>{label}</Text>
            </Flex>
            <Text
              fontSize='xs'
              color='gray.400'
              marginLeft='8'
            >
              {hint}
            </Text>
          </Box>

          <Select
            maxWidth='32'
            value={value}
            onChange={onChange}
          >
            <option value='test'>option</option>
            {options.map((option) => (
              <option
                key={option.key}
                value={option.value}
              >
                {option.key}
              </option>
            ))}
          </Select>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ConfigurationSelector;
