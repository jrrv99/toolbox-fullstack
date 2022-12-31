import APIError from '../utils/APIError.js';

const fetchOptions = {
  method: 'GET',
  headers: {
    authorization: 'Bearer aSuperSecretKey',
  },
};

const baseUrl = 'https://echo-serv.tbxnet.com';

export const getFileContent = async fileName => {
  const response = await fetch(
    `${baseUrl}/v1/secret/file/${fileName}`,
    fetchOptions
  );

  if (response.status && response.status !== 200) {
    throw new APIError(response.statusText, response.status);
  }

  return await response.text();
};

export const getFileList = async () => {
  const response = await fetch(`${baseUrl}/v1/secret/files`, fetchOptions);

  if (response.status && response.status !== 200) {
    throw new APIError(response.statusText, response.status);
  }

  return await response.json();
};

