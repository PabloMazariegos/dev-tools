import { Flex, Text, Image } from '@chakra-ui/react';

interface ImagePreviewProps {
  src: string;
}

const imagePreview = ({ src }: ImagePreviewProps) => {
  return (
    <Flex direction='column' gap={3} justifyContent='center'>
      <Text>Image preview</Text>
      <Flex
        alignItems='center'
        justifyContent='center'
        border='1px'
        borderStyle='solid'
        borderColor='gray.700'
        minHeight='48'
        padding='4'
      >
        <Image src={src} />
      </Flex>
    </Flex>
  );
};

export default imagePreview;
