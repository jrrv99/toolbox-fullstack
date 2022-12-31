import { FilesList } from '../components';
import Loader from '../components/Loader';
import { useGetFilesDataQuery } from '../redux/api/files';

const Files = () => {
  const { data, isLoading, error } = useGetFilesDataQuery();
  console.log(data);

  if (isLoading) return <Loader />;
  if (error) return <h1>Something went wrong</h1>;

  return (
    <>
      <FilesList files={data} />
    </>
  );
};

export default Files;

