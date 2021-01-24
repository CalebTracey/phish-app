import YearLink from './YearLink'

const YearLinkList = ({ data }) => {
    const yearNode = data === undefined ? "Loading..." :
        data.map((year) => {
            return (<YearLink year={year} key={year} />)
        });
    return (yearNode);
}

export default YearLinkList