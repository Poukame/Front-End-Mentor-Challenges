import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import Cta from './components/Cta';
import { nanoid } from 'nanoid';

function App() {
	const [display, setDisplay] = useState(false);
	const [linkData, setLinkData] = useState([]);
	const [inputURL, setInputURL] = useState('');
	const [submit, setSubmitStatus] = useState(true);
	const [savedLinks, setSavedLinks] = useState('');

	function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
		setInputURL(e.target.value);
	}

	function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		setSubmitStatus(!submit);
	}

	useEffect(() => {
		async function getShortLink(url: string) {
			if (url) {
				try {
					const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
					const data = await res.json();

					setLinkData((prevLinkData) => {
						prevLinkData.push({
							longLink: data.result.original_link,
							shortLink: data.result.full_short_link,
						});
						console.log('linkdata',linkData)
						return prevLinkData;
					});

					setSavedLinks(
						linkData.map((el) => {
							return (
								<div className='shortlink-wrapper' id={(el.id = nanoid())}>
									<div className='longlink'>{el.longLink}</div>
									<div className='shortlink'>{el.shortLink}</div>
									<button className='btn btn--shortlink'>Copy</button>
								</div>
							);
						})
					);
					console.log('savelinks', linkData)
					return savedLinks;

				} catch (err) {
					console.log(err);
				}
			}
		}
		getShortLink(inputURL);
	}, [submit]);

	// function renderLinks() {
	// 	savedLinks = linkData.map((el) => {
	// 		return (
	// 			<div className='shortlink-wrapper' id={el.id=nanoid()}>
	// 				<div className='longlink'>{el.longLink}</div>
	// 				<div className='shortlink'>{el.shortLink}</div>
	// 				<button className='btn btn--shortlink'>Copy</button>
	// 			</div>
	// 		);
	// 	});
	// 	console.log('savedlinks', savedLinks)
	// 	console.log('triggered 2')
	// 	return savedLinks
	// }

	return (
		<>
			<Header handleClick={() => setDisplay(!display)} display={display} />
			<main>
				<Hero />
				<Features
					onSubmit={(e: React.FormEvent<HTMLInputElement>) => handleSubmit(e)}
					onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e)}
					value={inputURL}
					savedLinks={savedLinks}
				/>
				<Cta />
			</main>
			<Footer />
		</>
	);
}

export default App;
