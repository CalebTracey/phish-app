import VenueLink from './VenueLink'

const VenueLinkList = ({ data }) => {
    const venueNode = data === undefined ? "Loading..." :
        data.map((venue) => {
            return (<VenueLink venue={venue} key={venue.id} />)
        });
    return (venueNode);
}

export default VenueLinkList