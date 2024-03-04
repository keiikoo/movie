import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;
    return ( 
    <div className="movies">
        {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
        ) : (
            <h4 className='deep-orange-text'> Not found :(  <h6>Mind your request</h6> </h4>
        )}
    </div>
    );
}

export { Movies };