import './style'
import '@exampledev/new.css'

var employment_experience = require('./data/employment_experience.json'),
	formal_education = require('./data/formal_education.json'), 
	current_tech_specs = require('./data/current_tech_specs.json'), 
	site_info_stuff_used = [
		['PreactJS', 'https://github.com/preactjs/preact'], 
		['new.css', 'https://github.com/xz/new.css'], 
		['VSCodium', 'https://github.com/VSCodium/vscodium'],
		['Github', 'https://github.com/xmagee']
	]

export default function App() {
	return (
		<div id='preact-root'>
			<header className='site_header'>
				<h1>Alex Magee</h1> 
				<p>Software Developer</p>
			</header>
			
			<>
				<p>
					Hi! 👋 I am currently self-employed as a contract-based software developer, open for employment (salary preferred). My 
					most used languages in production environments are Javascript (ReactJS, NodeJS), C#/VB.NET, Sql (MSSQL, MySql, 
					Sqlite), and en_US.  
				</p>

				<>
					<h3>Employment Experience 💼</h3>
					<p>
						<ul>
							{employment_experience.map((job, index) => (
								<li key={index}>
									<h4>{job.title}</h4>
									<strong>{job.employer} [ 📅 {job.start_date} - {job.end_date} ]</strong>
									<p>{job.descr}</p>
								</li>
							))}
						</ul>
					</p>
				</>

				<>
					<h3>Formal Education 🏫</h3>
					<p>
						<ul>
							{formal_education.map((edu, index) => (
								<li key={index}>
									<h4>{edu.name}</h4>
									<strong>[ 📅 {edu.start_date} - {edu.end_date} ]</strong>
									<p>{edu.descr}</p>
								</li>
							))}
						</ul>
					</p>
				</>
				
				<>
					<h3>My Current Tech Specs 💻</h3>
					<p>
						<ul>
							{current_tech_specs.map((pc, index) => (
								<li key={index}>
									<h4>{pc.name}</h4>
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
					<h4>Site Info 🐱</h4> 
					<strong>Last publish: July 12th, 2021 | <a href='https://github.com/xmagee/alexmagee.com' target='_blank'>Source</a></strong>
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