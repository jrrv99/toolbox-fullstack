import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Loader } from '../components';
import { useGetFileListQuery } from '../redux/api/files';
import { Routes } from '../routes/Routes';
import removeFileExtension from '../utils/removeFileExtension';

const Home = () => {
  const { data, isLoading, error } = useGetFileListQuery();
  console.log(data);

  if (isLoading) return <Loader />;
  if (error) return <h1>Something went wrong</h1>;

  return (
    <div className="px-3 mx-auto text-center">
      <h1>File List</h1>
      <ListGroup>
        {data.map(fileName => (
          <ListGroupItem key={fileName}>
            <Link to={`${Routes.FILES}/${removeFileExtension(fileName)}`}>
              {fileName}
            </Link>
          </ListGroupItem>
        ))}
        <ListGroupItem>
          <Link to={Routes.FILES}>All</Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Home;




