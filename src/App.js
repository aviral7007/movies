
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Componenet/header/header';
import Home from './Pages/Home';
import MovieList from './Componenet/movieList/movieList';
import Movie from './Pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element ={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*'element={<h1>error</h1>}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
