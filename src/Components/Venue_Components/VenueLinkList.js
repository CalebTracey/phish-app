import VenueLink from './VenueLink'
import Spinner from 'react-bootstrap/Spinner'

const VenueLinkList = ({ data }) => {
    const venueNode = data === undefined ? <Spinner animation="border"/> :
        data.map((venue) => {
            return (<VenueLink venue={venue} key={venue.id} />)
        });
    return (venueNode);
}

export default VenueLinkList