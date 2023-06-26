import React from 'react';
import { useToast } from '@chakra-ui/react';

export const useClipboard = () => {
  const toast = useToast();
  const [clipboardText, setClipboardText] = React.useState('');

  const onPaste = async (): Promise<string> => {
    const value = await navigator.clipboard.readText();

    if (value) {
      setClipboardText(value);
    }

    return value;
  };

  const onCopy = (valueToClipboard: string) => {
    navigator.clipboard.writeText(valueToClipboard);

    toast({
      title: 'Copied!',
      description: 'Values copied to clipboard',
      status: 'success',
      isClosable: true,
      position: 'bottom-right',
      duration: 4000
    });
  };

  return { onPaste, onCopy, clipboardText } as const;
};
