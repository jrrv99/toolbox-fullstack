import { getFileContent, getFileList } from '../services/externalApi.js';
import APIError from '../utils/APIError.js';
import formatFileContent from '../utils/formatFileContent.js';

const getFormatedFileContend = async fileName => {
  const response = await getFileContent(fileName);

  return formatFileContent(fileName, response);
};

const filesController = async (req, res, next) => {
  // Return the data of specific file in queryparam
  if (req.path !== req.url && req.query?.fileName) {
    const response = await getFormatedFileContend(req.query.fileName);

    return res.json(response);
  } else if (req.path !== req.url) {
    throw new APIError('Bad Query Params', 400);
  }

  // Get the file names list
  const { files } = await getFileList();

  // Get the formated data list for each file
  const data = await Promise.all(
    files.map(async fileName => {
      try {
        return await getFormatedFileContend(fileName);
      } catch (error) {
        return { error };
      }
    })
  );

  // Remove files with error
  const sanitizedData = data.filter(formatedFile => formatedFile?.file && formatedFile.lines.length > 0);

  return res.json(sanitizedData);
};

const fileListController = async (_req, res, next) => {
  // Get the file names list
  const { files } = await getFileList();

  return res.json(files);
};

export { filesController, fileListController }; // module.exports = { filesController, fileListController };

