import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const reducerPath = "filesApi";

const baseUrl = "http://127.0.0.1:3001";

const postApi = createApi({
  reducerPath,
  baseQuery: retry(
    fetchBaseQuery(
      {
        baseUrl,
      },
      { maxRetries: 3 }
    )
  ),
  endpoints: (builder) => ({
    getFilesData: builder.query({
      query: () => "/files/data",
    }),
    getFileDataByName: builder.query({
      query: (fileName) => `/files/data?fileName=${fileName}`,
    }),
    getFileList: builder.query({
      query: () => "/files/list",
    }),
  }),
});

const {
  useGetFileDataByNameQuery,
  useLazyGetFileDataByNameQuery,
  useGetFileListQuery,
  useLazyGetFileListQuery,
  useGetFilesDataQuery,
  useLazyGetFilesDataQuery,
  reducer: filesReducer,
  middleware: filesMiddleware,
} = postApi;

export {
  reducerPath,
  postApi,
  useGetFileDataByNameQuery,
  useLazyGetFileDataByNameQuery,
  useGetFileListQuery,
  useLazyGetFileListQuery,
  useGetFilesDataQuery,
  useLazyGetFilesDataQuery,
  filesReducer,
  filesMiddleware,
};
