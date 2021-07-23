import { useRef } from 'react'
import './style'
import { 
	Employment, 
	Education,  
	Navbar, 
	Header, 
	Bio, 
	PrintNav
} from './components'

export default function App() {
	const pdf_resume_reference = useRef(), 
		data = require('./data.json')

	return (
		<main id='preact-root'>
			<Header prr={pdf_resume_reference} />
			<Navbar />
			<div ref={pdf_resume_reference}>
				<PrintNav />
				<Bio />
				<Employment />
				<Education />
				<p className='print_msg print_only'>This PDF was automatically generated from {data.domain_name}.</p>
			</div>
		</main>
	)
}
