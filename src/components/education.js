import { formal_education } from '../data'

export default function Education() {
    return (
        <>
            <h2>Formal Education 🏫</h2>
			<ul>
				{formal_education.map((edu, index) => (
					<li key={index}>
						<h3>{edu.name}</h3>
						<strong>[ 📅 {edu.start_date} - {edu.end_date} ]</strong>
						<p>{edu.descr}</p>
					</li>
				))}
			</ul>
        </>
    )
}