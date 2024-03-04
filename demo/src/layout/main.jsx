import React from 'react';
import { Movies } from "../components/Movies";
import { Search } from "../components/search";
import { Preloader } from "../components/preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=f68b32cb&s=cars')
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false}));
    }

    searchMovies = (str, type ="all") => {
        fetch(
            `http://www.omdbapi.com/?apikey=f68b32cb&s=${str}${type !== "all" ? `&type=${type}` : ""
        }`
    )
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search}));
    }

    render() {
        const { movies, loading } = this.state;

        return (
             <main className='conteiner content'>
                <p className='grey-text'>This is a project to search for movies and TV shows with a search function with added filtering, you can search only for movies or TV shows, as well as everything at once. The database of films and TV series is taken from the website http://www.omdbapi.com / a request was generated using the API key and postman.</p>
            <Search searchMovies= {this.searchMovies} />
            {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
        </main>
        );
    }
}
 
export { Main }
