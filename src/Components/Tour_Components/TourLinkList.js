import TourLink from './TourLink'
import Spinner from 'react-bootstrap/Spinner'

const YearLinkList = ({ data }) => {
    const tourNode = data === undefined ? <Spinner animation="border"/> :
        data.map((tour) => {
            return (<TourLink tour={tour} key={tour.id} />)
        });
    return (tourNode);
}

export default YearLinkList