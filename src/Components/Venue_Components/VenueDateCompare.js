const VenueDateCompare = (data) => {

    function compare( a, b ) {
        const nameA = a.date.toUpperCase();
        const nameB = b.date.toUpperCase();

        let comparison = 0
        if ( nameA < nameB ){
            comparison = -1;
        }
        if ( nameA > nameB ){
            comparison = 1;
        }
        return comparison;
      }

    return (
        data.sort(compare)
    );
};

export default VenueDateCompare;