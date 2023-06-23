import React from 'react';
import { Box, Card, CardBody, Flex, Icon, Select, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ConfiguratorOptionType, ConfiguratorSelectorOptions } from '@/types/';

interface ConfigurationSelectorProps {
  icon: IconType;
  label: string;
  hint?: string;
  options: Array<ConfiguratorSelectorOptions>;
  onChange: (value: ConfiguratorOptionType) => void;
  value: string;
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
            <Flex alignItems='center' gap='3'>
              <Icon as={icon} boxSize='5'></Icon>
              <Text>{label}</Text>
            </Flex>
            <Text fontSize='xs' color='gray.400' marginLeft='8'>
              {hint}
            </Text>
          </Box>

          <Select
            maxWidth='32'
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          >
            <option value='test'>option</option>
            {options.map((option) => (
              <option key={option.key} value={option.value}>
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
