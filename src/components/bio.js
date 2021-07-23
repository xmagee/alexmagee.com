const data = require('../data.json')

export default function Bio() {
    return (
        <p>{data.site_bio}</p>
    )
}