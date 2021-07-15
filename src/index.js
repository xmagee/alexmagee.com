import { useEffect } from 'react'
import './style'
import '@exampledev/new.css'
import { site_info_stuff_used, nav_links, ee1 } from './data/links'

var employment_experience = require('./data/employment_experience.json'),
	formal_education = require('./data/formal_education.json'), 
	current_tech_specs = require('./data/current_tech_specs.json')

export default function App() {
	useEffect(() => {
		console.log(ee1)
	})

	return (
		<div id='preact-root'>
			<header className='site_header'>
				<h1>Alex Magee</h1> 
				<p>Software Developer</p>
			</header>
			
			<>
				<nav className='links_container'>
					{nav_links.map((i, index) => ( 
						<span key={index}><a href={i[1]} target='_blank'>{i[0]}</a> {index !==  nav_links.length - 1 ? ' | ' : ''}</span> 
					))}
				</nav>

				<p>
					Hi! 👋 I am currently self-employed as a contract-based software developer, open for employment. My 
					most used languages in production environments are Javascript (ReactJS, NodeJS), C#/VB.NET/ASP.NET, Sql (MSSQL, MySql, 
					Sqlite), and en_US.
				</p>

				<>
					<h2>Employment Experience 💼</h2>
					<p>
						<ul>
							{employment_experience.map((job, index) => (
								<li key={index}>
									<h3>{job.title}</h3>
									<strong>{job.employer} [ 📅 {job.start_date} - {job.end_date} ]</strong>
									<p>{job.descr}</p>
								</li>
							))}
						</ul>
					</p>
				</>

				<>
					<h2>Formal Education 🏫</h2>
					<p>
						<ul>
							{formal_education.map((edu, index) => (
								<li key={index}>
									<h3>{edu.name}</h3>
									<strong>[ 📅 {edu.start_date} - {edu.end_date} ]</strong>
									<p>{edu.descr}</p>
								</li>
							))}
						</ul>
					</p>
				</>
				
				<>
					<h2>My Current Tech Specs 💻</h2>
					<p>
						<ul>
							{current_tech_specs.map((pc, index) => (
								<li key={index}>
									<h3>{pc.name}</h3>
									<details>
										<table>
											<tbody>
												{Object.keys(pc).map((keyName, keyIndex) => (
													keyName !== 'name' && (
														<tr key={keyIndex}>
															<td width='120'>
																{keyName}
															</td>
															{Array.isArray(pc.[keyName]) ? (
																<td>
																	<ul>
																		{pc.[keyName].map((keyNameArrValue, keyNameArrIndex) => (
																			<li key={keyNameArrIndex}>
																				{keyNameArrValue}
																			</li>
																		))}
																	</ul>
																</td>
															)
															:
															(
																<td>
																	{pc.[keyName]}
																</td>
															)}
														</tr>
													)
												))}
											</tbody>
										</table>
									</details>
								</li>
							))}
						</ul>		
					</p>
				</>
				
				<hr />

				<>
					<h2>Site Info 🐱</h2> 
					<strong>Last publish: July 13th, 2021 | <a href='https://github.com/xmagee/alexmagee.com' target='_blank'>Source</a></strong>
					<br /><br />
					<span>Built with:</span>
					<p>
						{site_info_stuff_used.map((i, index) => (
							<span key={index}>
								<a href={i[1]} target='_blank'>{i[0]}</a> {index !==  site_info_stuff_used.length - 1 ? ' | ' : ''}
							</span>
						))}
					</p>
				</>
			</>
		</div>
	)
}