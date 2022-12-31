import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from '../routes/Routes';
import removeFileExtension from '../utils/removeFileExtension';

const FilesList = ({ files }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {files.map(({ file, lines }, index) => (
          <>
            {lines.map(({ text, number, hex }) => (
              <tr key={`${file}_line${index}`}>
                <td>
                  <Link to={`${Routes.FILES}/${removeFileExtension(file)}`}>{file}</Link>
                </td>
                <td>{text}</td>
                <td>{number}</td>
                <td>{hex}</td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </Table>
  );
};

FilesList.propTypes = {
  files: PropTypes.array, // TODO: Change it to arrayOf
};

export default FilesList;

