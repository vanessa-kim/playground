import { Link } from 'react-router-dom';
import styles from './Navigation.modules.scss';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;