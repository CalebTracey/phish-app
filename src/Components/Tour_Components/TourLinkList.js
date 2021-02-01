import TourLink from './TourLink'
import Spinner from 'react-bootstrap/Spinner'

const TourLinkList = ({ tours }) => {
    //const tourNode = tours === undefined ? <Spinner animation="border"/> :

    const tourArr = Array.from(Object.values(tours))
    const tourNode = !tourArr.length > 0 ? <Spinner animation="border" /> :
    tourArr.map((tour) => {
            return (<TourLink tour={tour} key={tour.id} />)
        });
    return (tourNode);
}

export default TourLinkList