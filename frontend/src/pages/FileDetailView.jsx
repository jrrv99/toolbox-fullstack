import { useParams } from "react-router-dom";
import { FilesList, Loader } from "../components";
import { useGetFileDataByNameQuery } from "../redux/api/files";

const FileDetailView = () => {
  const {fileName} = useParams()
  const { data, isLoading, error } = useGetFileDataByNameQuery(`${fileName}.csv`);

  if (isLoading) return <Loader />;
  if (error) {
    if (error.status === 404) return <h1>404 - File Not Found</h1>;
    return <h1>Something went wrong</h1>;
  };

  return <FilesList files={[data]}/>;
};




export default FileDetailView;