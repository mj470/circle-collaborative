import Circle3Image from '../assets/images/circle3.png';

const Header = () => {

  const headerStyle = {
    backgroundImage: `url(${Circle3Image})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '150px',
    width: '100% 100%',
  };

  return (
    <header style={headerStyle}>
    </header>
  );
};

export default Header;
