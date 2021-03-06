import { useState } from "react";

let movieCardStyle = {
  display: "block",
  height: "500px",
  width: "300px",
  margin: "32px",
};
let posterStyle = {
  height: "50%",
  width: "auto",
};
let briefStyle = {};

const MovieCard = ({ poster, title, type, data, setClickedDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [oldData, setOldData] = useState({});

  const openDetails = async () => {
    data = await getMoviesBySearchTerm(getApiId(), _searchString);
  };

  if (data) {
    return (
      <div id={`search${data.imdbID}`} style={movieCardStyle}>
        <img
          id='posterImg'
          style={posterStyle}
          src={poster}
          alt='No Poster Available'
        ></img>
        <div id='movieInfo' style={briefStyle}>
          <div id='cardTitleRow'>
            <p id='titleText'>{title}</p>
            <p id='movieType'>{type}</p>
          </div>
          <div id='detailsBtn'>
            <input
              value='Details'
              id='moreDetails'
              type='button'
              onClick={() => {
                setClickedDetails(data);
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Try Searching for Something</p>;
  }
};

MovieCard.defaultProps = {
  title: "Batman",
  type: "Movie",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
};

export default MovieCard;
