import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <Link to='/'>
        <div className='hero-container'>
            <h1>Welcome to Circle</h1>
            <p>Are you ready to connect with people who share your love for the things that matter most to you? Circle is the vibrant, online community that brings like-minded individuals together, allowing you to join a variety of groups based on your shared interests in social and cultural phenomena. Say hello to a digital space where your passions flourish and your social connections soar!</p>
            <button>Learn More</button>
        </div>
        </Link>
    );
}

export default HeroSection;
