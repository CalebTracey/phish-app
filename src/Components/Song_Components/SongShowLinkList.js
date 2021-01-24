import '../../style.css';
import ShowLink from "../Show_Components/ShowLink";

const SongShowLinkList = ({ shows }) => {
  const showNode = shows.tracks.map((show) => {
    return <ShowLink show={show} key={show.id} />;
  });
  return showNode;
};

export default SongShowLinkList;
