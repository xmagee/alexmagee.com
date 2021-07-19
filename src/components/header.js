import Description from '@material-ui/icons/Description'
import ReactToPrint from 'react-to-print'

export default function Header(props) {
    return (
        <header>
            <h1>Alex Magee</h1> 
            <p>Software Developer</p>
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