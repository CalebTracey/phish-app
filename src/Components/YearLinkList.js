import YearLink from './YearLink'

const YearLinkList = ({ data }) => {
    const yearNode = data === undefined ? "Loading..." :
        data.map((year) => {
            return (<YearLink year={year} key={year} />)
        });
    //console.log("*****YEARLINKLIST*****" + yearNode)
    if (yearNode !== undefined) {
        return (

            <div>{yearNode}</div>

        );
    }

}

export default YearLinkList