import { nav_links } from '../data'

export default function Navbar() {
    return (
        <nav className='links_container'>
            {nav_links.map((i, index) => ( 
                <span key={index}><a href={i[1]} target='_blank'>{i[0]}</a> {index !==  nav_links.length - 1 ? ' | ' : ''}</span> 
            ))}
        </nav>
    )
}