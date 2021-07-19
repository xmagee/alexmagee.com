import { useEffect } from 'react'
import './style'
import { ee1, bio } from './data'
import { Employment, Education, Specs, SiteInfo, Navbar } from './components'

export default function App() {
	useEffect(() => {
		console.clear()
		console.log(ee1)
	})

	return (
		<main id='preact-root'>
			<header className='site_header'>
				<h1>Alex Magee</h1> 
				<p>Software Developer</p>
			</header>
			
			<Navbar />

			<p>{bio}</p>
			
			<Employment />
			
			<Education />
			
			<Specs />
					
			<hr />
			
			<SiteInfo />
		</main>
	)
}