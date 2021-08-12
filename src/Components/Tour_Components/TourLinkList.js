import TourLink from "./TourLink";
import Spinner from "react-bootstrap/Spinner";

const TourLinkList = ({ data }) => {
  const tourNode =
    data === undefined ? (
      <Spinner animation="border" />
    ) : (
      data.map((tour, key) => {
        return <TourLink tour={tour} key={key} />;
      })
    );
  return tourNode;
};

export default TourLinkList;
