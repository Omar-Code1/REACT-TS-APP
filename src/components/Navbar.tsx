import logo from '../img/logo192.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="logo-react" width="50px" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
