import { useRef } from 'react'
import Description from '@material-ui/icons/Description'
import ReactToPrint from 'react-to-print'
import { isMobile } from 'react-device-detect'
import './style'

const data = require('./data.json')

export default function App() {
	const pdf_resume_reference = useRef()
	return (
		<main id='preact-root'>
			<header>
				<h1>{data.resume_name}</h1> 
				<p>{data.resume_job_title}</p>
				{!isMobile && (
					<ReactToPrint 
						content={() => pdf_resume_reference.current}
						trigger={() => {
						return (
							<button>
								view as .pdf
								<Description />
							</button>
						)
					}}/>
				)}
			</header>
			
			<nav role='navigation' aria-label='Main'>
				{data.nav_links.map((i, index) => ( 
					<span key={index}>
						<a href={i[1]} target='_blank' rel='noopener'>{i[0]}</a>
						{index !==  data.nav_links.length - 1 ? ' | ' : ''}
					</span>
				))}
			</nav>

			<div ref={pdf_resume_reference}>
				
				<div className='print_nav print_only'>
					{data.pdf_links}
				</div>
				
				<p>{data.site_bio}</p>
				
				<h2>Employment Experience 💼</h2>
				<ul>
					{data.employment_experience.map((job, index) => (
						<li key={index}>
							<h3>{job.title}</h3>
							<strong>{job.employer} [ 📅 {job.start_date} - {job.end_date} ]</strong>
							<p>{job.descr}</p><wbr />
						</li>
					))}
				</ul>

				<h2>Formal Education 🏫</h2>
				<ul>
					{data.formal_education.map((edu, index) => (
						<li key={index}>
							<h3>{edu.name}</h3>
							<strong>[ 📅 {edu.start_date} - {edu.end_date} ]</strong>
							<p>{edu.descr}</p><wbr />
						</li>
					))}
				</ul>

				<p className='print_msg print_only'>This PDF was automatically generated from {data.domain_name}.</p>
			</div>
		</main>
	)
}