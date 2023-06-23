import { ConfiguratorItemValue, isConfiguratorItemValue } from '@/types/configurator-selector';
import React from 'react';

const useConfigurator = <T extends ConfiguratorItemValue>(defaultValue: T) => {
  const [configuration, setConfiguration] = React.useState<T>(defaultValue);

  const handleOnChange = (value: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConfiguration = value.target.value;

    if (isConfiguratorItemValue(selectedConfiguration)) {
      setConfiguration(selectedConfiguration as T);
    }
  };

  return [configuration, handleOnChange] as const;
};

export default useConfigurator;
