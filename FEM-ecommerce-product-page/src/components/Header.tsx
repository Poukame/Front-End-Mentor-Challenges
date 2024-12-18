import menuIcon from '../assets/icon-menu.svg';
import { IoCartOutline } from 'react-icons/io5';
import avatar from '../assets/image-avatar.png';
import logo from '../assets/logo.svg';
import iconClose from '../assets/icon-close.svg';
import { IPropsHeader } from '../types';
import { useContext } from 'react';
import { AppContext } from '../App';

function Header({ setToggleMenu, setIsCart }: IPropsHeader) {
	const { isMenu, cartItems, cartIconRef } = useContext(AppContext) ?? {};
	
	const nbItemsInCart = cartItems.reduce((acc, cur) => {
			acc += cur.count
			return acc
		},0)
	
	
	const navItems = [
		{ nav: 'Collections', link: '/' },
		{ nav: 'Men', link: '/' },
		{ nav: 'Women', link: '/' },
		{ nav: 'About', link: '/' },
		{ nav: 'Contact', link: '/' },
	];
	const navHTML = navItems.map(({ nav, link }) => {
		return (
			<a href={link} key={nav} className='text-dark-gray-blue hover:text-black hover:underline hover:underline-offset-8 hover:decoration-main-orange hover:decoration-2'>
				<li>{nav}</li>
			</a>
		);
	});

	return (
		<div className='border-b-2 flex items-center bg-white px-4 lg:px-0 py-4 justify-between'>
			<div className='flex gap-4 items-baseline md:items-center'>
				<button className='md:hidden' onClick={() => setToggleMenu()}>
					<img className='w-5 h-5 ' src={menuIcon} alt='click to display the menu' />
				</button>
				<a href='/'>
					<img className='h-6' src={logo} alt='logo of Sneakers brand.' />
				</a>
				<nav className='hidden md:block'>
					<ul className='flex gap-4'>{navHTML}</ul>
				</nav>
			</div>
			{isMenu && (
				<div className='absolute z-50 top-0 left-0 h-full w-full md:hidden bg-slate-800 bg-opacity-75'>
					<div className='bg-white h-full w-7/12 p-6'>
						<button onClick={() => setToggleMenu()}>
							<img src={iconClose} alt='icon to close the mobile menu' />
						</button>

						<nav className='mt-10'>
							<ul className='flex flex-col gap-6 font-bold text-xl'>{navHTML}</ul>
						</nav>
					</div>
				</div>
			)}
			<div className='flex items-center gap-6'>
				<button
				ref={cartIconRef}
					className='cartbtn relative flex justify-center items-center text-3xl text-black'
					aria-label='click to access your cart.'
					onClick={() => {
						setIsCart();
					}}
				>
					<IoCartOutline />
					<span className='absolute -inset-5 bottom-0 left-0'>
						<div className='inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold bg-main-orange text-white'>
							{nbItemsInCart}
						</div>
					</span>
				</button>
				<button className='rounded-full border-transparent hover:border-main-orange border-2' aria-label='click to access your account.'>
					<img className='h-10 w-10 ' src={avatar} alt='avatar icon to access your account' />
				</button>
			</div>
		</div>
	);
}

export default Header;
