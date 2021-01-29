const TourCompare = (data) => {

    function compare(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        let comparison = 0
        if (nameA < nameB) {
            comparison = -1;
        }
        if (nameA > nameB) {
            comparison = 1;
        }
        return comparison;
    }

    return (
        data.sort(compare)
    );
};

export default TourCompare;