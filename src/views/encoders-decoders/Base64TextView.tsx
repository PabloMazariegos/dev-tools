import ConfigurationSelector from '@/components/ConfigurationSelector/ConfigurationSelector';
import { Heading } from '@chakra-ui/react';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import { encodeDecodeConfiguratorItems } from '@/config/configurator-selector.config';
import useConfigurator from '@/hooks/useConfigurator.hook';
import { EncodeDecode } from '@/types/configurator-selector';

const base64TextView = () => {
  const [configuration, handleOnChange] = useConfigurator<EncodeDecode>('DECODE');

  return (
    <>
      <Heading size='xl' marginBottom='8'>
        Base64 to plain text {configuration}
      </Heading>

      <ConfigurationSelector
        icon={HiArrowsRightLeft}
        label='Configuration'
        hint='Select the conversion mode'
        options={encodeDecodeConfiguratorItems}
        onChange={handleOnChange}
        value={configuration}
      />
    </>
  );
};

export default base64TextView;
