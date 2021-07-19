import { nav_links } from '../data'

export default function Navbar() {
    return (
        <nav role='navigation' aria-label='Main'>
            {nav_links.map((i, index) => ( 
                <span key={index}>
                    <a href={i[1]} target='_blank' rel='noopener'>{i[0]}</a>
                    {index !==  nav_links.length - 1 ? ' | ' : ''}
                </span> 
            ))}
        </nav>
    )
}