import SongLink from './SongLink'

const SongLinkList = ({ data }) => {
    const songNode = data === undefined ? "Loading..." :
        data.map((song) => {
            return (<SongLink song={song} key={song.id} />)
        });
    return (songNode);
}

export default SongLinkList