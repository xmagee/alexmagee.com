const data = require('../data.json')

export default function Navbar() {
    return (
        <nav role='navigation' aria-label='Main'>
            {data.nav_links.map((i, index) => ( 
                <span key={index}>
                    <a href={i[1]} target='_blank' rel='noopener'>{i[0]}</a>
                    {index !==  data.nav_links.length - 1 ? ' | ' : ''}
                </span> 
            ))}
        </nav>
    )
}