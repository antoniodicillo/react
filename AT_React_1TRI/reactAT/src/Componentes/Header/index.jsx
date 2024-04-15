import {Link} from 'react-router-dom';

function Header({ menuItems }) {
  return (
    <header style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <nav> 
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index} className='navText'>
              <Link to={menuItem.link}>{menuItem.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
