const SongCompare = (data) => {

    function compare( a, b ) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0
        if ( titleA < titleB ){
          comparison = -1;
        }
        if ( titleA > titleB ){
          comparison = 1;
        }
        return comparison;
      }

    return (
        data.sort(compare)
    );
};

export default SongCompare;