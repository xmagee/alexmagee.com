import { useEffect, useRef } from 'react'
import './style'
import { ee1, bio } from './data'
import { Employment, Education, Specs, SiteInfo, Navbar, Header } from './components'

export default function App() {
	useEffect(() => {
		console.clear()
		console.log(ee1)
	})

	const pdf_resume_reference = useRef()

	return (
		<main id='preact-root'>
			<Header prr={pdf_resume_reference} />

			<Navbar />

			<div ref={pdf_resume_reference}>
				<div className='print_nav print_only'>
					Alex Magee | alex@magee.us | github.com/xmagee
				</div>

				<p>{bio}</p>

				<Employment />

				<Education />

				<p className='print_msg print_only'>This PDF was automatically generated from alexmagee.com.</p>
			</div>

			<Specs />	

			<hr />

			<SiteInfo />
		</main>
	)
}