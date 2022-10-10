import { useEffect , useState} from "react";
import MovieCard from './MovieCard'
//96222cc5
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=96222cc5';


const App=()=>{
  const [movies, setMovies] =  useState([]); 
  const [searchTerm,setSearchTerm] = useState('');
  const searchMovies = async(title) =>{// async function nya kan menerima title 
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(()=>{
    searchMovies('spiderman');
  }, []);
  return(
    // <h1>App</h1>
    <div className="app">
      <h1>NEZ Movies List</h1>
      <div className="search">
      <input type="text" placeholder="Search for movie" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      <img src={SearchIcon} alt="Search" onClick={()=>(searchMovies(searchTerm))}/>
      </div>
      {
        movies?.length > 0 ?(
            <div className="container">
            {movies.map((movie)=>(
              <MovieCard movie = {movie}/>
            ))}
            </div>
          ):(
            <div className="empty">
              <h2>no movies found</h2>
            </div>
          )
        };
    </div>
    );
}
export default App;

