import './App.css';
import MovieCard from './Components/MovieCard'; 
import MovieList from './Components/MovieList'
import { useState } from 'react';
import { Nav} from "react-bootstrap";
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import Trailer from './Components/Trailer';
import {

  BrowserRouter as Router, Switch, Route,Link, useRouteMatch,useParams} from "react-router-dom";
function App() {
  const [movie,setMovie]=useState( [
    {
    'id':"M001",
    'title': "The kissing booth 3",
    'description': "is a 2021 American teen romantic comedy film directed by Vince Marcello, from a screenplay by Marcello and Jay Arnold. It is the third and final installment in The Kissing Booth trilogy based on Beth Reekles' novel of the same name, following The Kissing Booth and The Kissing Booth 2.",
    'posterUrl': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnuIy9W1KW80Bbq7p5r8FAyyw2iCWOwQkng&usqp=CAU",
    'rating': "2.5",
    'trailerLink':"https://www.youtube.com/embed/5fKn0Dhj64w"
      },
    {
    'id':"M002",
    'title': "Adrift",
    'description': " is a 2018 American survival drama film produced and directed by Baltasar Kormákur and written by David Branson Smith, Aaron Kandell and Jordan Kandell. The film is based on the 2002 book Red Sky at Mourning by Tami Oldham Ashcraft, a true story set during the events of Hurricane Raymond in 1983. ",
    'posterUrl': "https://i.pinimg.com/originals/55/94/9f/55949f62a02b0243a6c721f1fef91956.jpg",
    'rating': "4.5",
    'trailerLink':"https://www.youtube.com/embed/If2lCD0SQrE"

    },
    {
      'id':"M003",
      'title': "Love,Rosie",
      'description': "is a 2014 romantic comedy-drama film directed by Christian Ditter from a screenplay by Juliette Towhidi, based on the 2004 novel Where Rainbows End by Irish author Cecelia Ahern.",
      'posterUrl': "https://fr.web.img6.acsta.net/pictures/14/12/05/15/48/510314.jpg",
      'rating': "4.7",
      'trailerLink':"https://www.youtube.com/embed/5zL3YJKygd4"
      },
    ])
    const [searchMovie,setSearchMovie]= useState(movie)
    const handleSearch=(search)=>{
        setSearchMovie(movie.filter((item) => { return item.title.toLowerCase().includes(search.toLowerCase()); }))
     // setSearchMovie(movie.filter((item) => { return item.rating === search}));
      }

    const addMovie=(film)=>{
      setMovie([...movie, film]);
      }
      return (
        <>
        <Router>
        <div className="app">
        <Switch>
        <Route exact path="/">
        <br></br>
        <Filter  movies={movie} FnSearch={handleSearch} ></Filter>
        <br></br>
        <MovieList movies={searchMovie}></MovieList>
        <br></br>
        </Route>
        <Route path="/Trailer/:id">
        <Trailer  movies={movie}></Trailer>
        </Route>
        </Switch>
        </div>
        </Router>
        </>
        
        );
        
        
}

export default App;
