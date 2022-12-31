import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

const Header = ({ children }) => {
  return (
    <Navbar bg="primary" className="text-white p-3">
      {children}
    </Navbar>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

