export const useRandomColor = () => {
  const pickRandomColor = () => {
    const randomHex = Math.random().toString(16).substring(-6);
    return `#${randomHex}`;
  };

  return { pickRandomColor } as const;
};
