import logo from '../images/logo.svg';

function Logo({ width = '36px' }) {
	return <img src={logo} className='mt-8 mb-10 mx-auto' alt='logo of the company' style={{ width }} />;
}

export default Logo;
