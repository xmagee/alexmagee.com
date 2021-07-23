const data = require('../data.json')

export default function PrintNav() {
    return (
        <div className='print_nav print_only'>
            {data.pdf_links}
        </div>
    )
}