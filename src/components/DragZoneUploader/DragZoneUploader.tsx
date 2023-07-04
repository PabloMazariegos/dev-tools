import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { UploadedFiles } from '@/types/dragzone-uploader';

interface DragZoneUploaderProps {
  onUpload: (value: UploadedFiles) => void;
}

const dragZoneUploader = ({ onUpload }: DragZoneUploaderProps) => {
  const [dragZoneActive, setDragZoneActive] = React.useState(false);
  const uploadFileInputRef = React.useRef<HTMLInputElement>(null);

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

  const handleDropFile = async (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setDragZoneActive(false);
    const files = [...event.dataTransfer.files];

    onUpload(files);
  };

  const handleBrowseFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.target.files;

    onUpload(files);
  };

  return (
    <Flex direction='column' gap={3}>
      <Text>Upload</Text>
      <input
        type='file'
        multiple={false}
        ref={uploadFileInputRef}
        style={{ display: 'none' }}
        onChange={handleBrowseFile}
      />
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
        <Text fontSize='sm'>Drag and drop an image or file here</Text>
        <Text fontSize='sm'>or</Text>
        <Text fontSize='sm' color='blue.400' cursor='pointer' onClick={handleBrowseFileClick}>
          Browse file
        </Text>
      </Flex>
    </Flex>
  );
};

export default dragZoneUploader;
