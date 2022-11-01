
import './App.css';

import { Container} from 'react-bootstrap';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';
import { CustomCard } from './components/CustomCard';
import { useState } from 'react';

const App =()=> {
  const [movieList, setMovieList] = useState([]);
  
  const addMovie = (movie)=>{
    //filter out the movie if already in the list 
    const filteredMovies = movieList.filter((item)=> item.imdbID  !== movie.imdbID
    );
    setMovieList([...filteredMovies, movie]);
  };
  console.log(movieList);

  const deleteMovie =(id) =>{
    if (!window.confirm("are you sure?")){
      return
    }
    setMovieList(movieList.filter((item) => item.imdbID !== id));
  };
  return(
  <div className='wrapper'>
  <Container>
   <Title/>
   <SearchForm  func ={addMovie}/>
   <MovieList movieList={movieList} deleteMovie={deleteMovie} />
   
  </Container>
  

    </div>
  );
}

export default App;
