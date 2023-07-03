import TextAreaViewer from '@/components/TextAreaViewer/TextAreaViewer';
import ImagePreview from '@/components/ImagePreview/ImagePreview';
import DragZoneUploader from '@/components/DragZoneUploader/DragZoneUploader';
import { useClipboard } from '@/hooks/useClipboard';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { UploadedFiles } from '@/types/dragzone-uploader';

const base64FileView = () => {
  const imageMimeTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/tiff', 'image/webp'];

  const [textAreaInput, setTextAreaInput] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const [showImagePreview, setShowImagePreview] = React.useState(false);

  const { onCopy, onPaste } = useClipboard();

  React.useEffect(() => {
    const dataType = textAreaInput.split(';');

    if (dataType && dataType.length > 0) {
      const mimeType = dataType[0].split(':');

      if (mimeType && mimeType.length > 0) {
        const uploadedMimeType = mimeType[1];
        const isImage = imageMimeTypes.includes(uploadedMimeType);
        setShowImagePreview(isImage);
      }
    }

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
    setImagePreview('');
    setShowImagePreview(false);
  };

  const handleOnChange = (value: string) => {
    setTextAreaInput(value);
  };

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Box>
        <Heading size='xl' marginBottom='8'>
          Base64 to file
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
      {showImagePreview && <ImagePreview src={imagePreview} />}
    </SimpleGrid>
  );
};

export default base64FileView;
