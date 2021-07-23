import Description from '@material-ui/icons/Description'
import ReactToPrint from 'react-to-print'
const data = require('../data.json')

export default function Header(props) {
    return (
        <header>
            <h1>{data.resume_name}</h1> 
            <p>{data.resume_job_title}</p>
            <ReactToPrint 
                content={() => props.prr.current}
                trigger={() => {
                return (
                    <button>
                        view as .pdf
                        <Description />
                    </button>
                )
            }}/>
        </header>
    )
}