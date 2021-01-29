import SongLink from './SongLink'
import Spinner from 'react-bootstrap/Spinner'

const SongLinkList = ({ data }) => {
    const songNode = data === undefined ? <Spinner animation="border"/> :
        data.map((song) => {
            return (<SongLink song={song} key={song.id} />)
        });
    return (songNode);
}

export default SongLinkList