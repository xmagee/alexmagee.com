import { site_source_repo_link, site_info_stuff_used } from '../data'

export default function SiteInfo() {
    return (
        <>
            <h2>Site Info 🐱</h2> 
			<strong>Last publish: July 13th, 2021 | <a href={site_source_repo_link} target='_blank'>Source</a></strong>
			<div>
				<span>Built with:</span>&nbsp;
				{site_info_stuff_used.map((i, index) => (
					<span key={index}>
						<a href={i[1]} target='_blank'>{i[0]}</a> {index !==  site_info_stuff_used.length - 1 ? ' | ' : ''}
					</span>
				))}
			</div>
        </>
    )
}