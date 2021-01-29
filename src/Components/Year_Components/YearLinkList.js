import YearLink from './YearLink'
import Spinner from 'react-bootstrap/Spinner'

const YearLinkList = ({ data }) => {
    const yearNode = data === undefined ? <Spinner animation="border" /> :
        data.map((year) => {
            return (<YearLink year={year} key={year} />)
        });
    return (yearNode);
}

export default YearLinkList