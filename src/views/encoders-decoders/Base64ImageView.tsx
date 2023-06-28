import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import ImagePreview from '@/components/ImagePreview/ImagePreview';
import DragZoneUploader from '@/components/DragZoneUploader/DragZoneUploader';
import { useClipboard } from '@/hooks/useClipboard';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { UploadedFiles } from '@/types/dragzone-uploader';

const base64ImageView = () => {
  const [textAreaInput, setTextAreaInput] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');

  const { onCopy, onPaste } = useClipboard();

  React.useEffect(() => {
    setImagePreview(textAreaInput);
  }, [textAreaInput]);

  const handleUpload = async (files: UploadedFiles) => {
    const base64 = await convertFileToBase64(files);
    if (base64) {
      setTextAreaInput(base64.toString());
    }
  };

  const convertFileToBase64 = (files: File[] | FileList | null) => {
    if (files && files.length > 0) {
      const existingFile = files[0];

      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(existingFile);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    }
  };

  const handleOnCopy = () => {
    if (textAreaInput) {
      onCopy(textAreaInput);
    }
  };

  const handleOnPaste = async () => {
    const clipboardText = await onPaste();
    if (clipboardText) {
      setTextAreaInput(clipboardText);
    }
  };

  const handleOnDelete = () => {
    setTextAreaInput('');
  };

  const handleOnChange = (value: string) => {
    setTextAreaInput(value);
  };

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Box>
        <Heading size='xl' marginBottom='8'>
          Base64 to image
        </Heading>
      </Box>
      <DragZoneUploader onUpload={handleUpload} />
      <Box>
        <TextAreaViewer
          headingText='Base64'
          content={textAreaInput}
          allActions
          onCopy={handleOnCopy}
          onPaste={handleOnPaste}
          onDelete={handleOnDelete}
          onChange={handleOnChange}
        />
      </Box>
      <ImagePreview src={imagePreview} />
    </SimpleGrid>
  );
};

export default base64ImageView;
