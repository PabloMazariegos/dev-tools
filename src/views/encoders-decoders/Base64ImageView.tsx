import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const base64ImageView = () => {
  const uploadFileInputRef = React.useRef<HTMLInputElement>(null);
  const [dragZoneActive, setDragZoneActive] = React.useState(false);

  const handleBrowseFileClick = () => {
    if (uploadFileInputRef && uploadFileInputRef.current) {
      uploadFileInputRef.current.click();
    }
  };

  const handleDragEnterAndLeave = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === 'dragenter') {
      setDragZoneActive(true);
    }

    if (event.type === 'dragleave') {
      setDragZoneActive(false);
    }
  };

  const handleDropFile = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setDragZoneActive(false);
    const files = [...event.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFile = files[0];
      console.log(existingFile);
    }
  };

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Box>
        <Heading size='xl' marginBottom='8'>
          Base64 to image
        </Heading>
      </Box>
      <Flex direction='column' gap={3}>
        <Text>Image upload</Text>
        <input type='file' ref={uploadFileInputRef} style={{ display: 'none' }} />
        <Flex
          direction='column'
          alignItems='center'
          justifyContent='center'
          width='full'
          border='1px'
          borderStyle='dashed'
          borderColor='gray.400'
          minHeight='40'
          gap={3}
          onDragOver={handleDragEnterAndLeave}
          onDragEnter={handleDragEnterAndLeave}
          onDragLeave={handleDragEnterAndLeave}
          onDrop={handleDropFile}
          draggable='true'
          backgroundColor={dragZoneActive ? 'blue.900' : 'inherit'}
        >
          <Text fontSize='sm'>Drag and drop a PNG, JPG, JPEG file here</Text>
          <Text fontSize='sm'>or</Text>
          <Text fontSize='sm' color='blue.400' cursor='pointer' onClick={handleBrowseFileClick}>
            Browse file
          </Text>
        </Flex>
      </Flex>
      <Box>
        <TextAreaViewer type='INPUT' />
      </Box>
      <Box>
        <TextAreaViewer type='OUTPUT' />
      </Box>
    </SimpleGrid>
  );
};

export default base64ImageView;
