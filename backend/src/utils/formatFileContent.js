const formatFileContent = (fileName, fileContent) => {
  const allLines = fileContent.split('\n');

  // Remove header and split by lines
  const dataLines = allLines.slice(1).map(line => line.split(','));

  const correctLines = dataLines.filter(line => line.length === 4);

  const lines = correctLines.map(splitedLine => {
    const [, text, number, hex] = splitedLine;
    return { text, number, hex };
  });

  return { file: fileName, lines };
};

export default formatFileContent;
