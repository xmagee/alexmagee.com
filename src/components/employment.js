import { employment_experience } from '../data'

export default function Employment() {
    return (
        <>
            <h2>Employment Experience 💼</h2>
			<ul>
				{employment_experience.map((job, index) => (
					<li key={index}>
						<h3>{job.title}</h3>
						<strong>{job.employer} [ 📅 {job.start_date} - {job.end_date} ]</strong>
						<p>{job.descr}</p>
					</li>
				))}
			</ul>
        </>
    )
}