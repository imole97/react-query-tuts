import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './component/home-page.component';
import RQSuperheroesPage from './component/RQsuperheroes.component-page';
import SuperheroesPage from './component/superheroes-page.component';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home Page</Link></li>
          <li><Link to='/superheroes'>Traditional Superheros</Link></li>
          <li><Link to='/rq-super-heroes'>RQ Super Heroes</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='rq-superheroes' element ={<RQSuperheroesPage/>} />
        <Route path='superheroes' element ={<SuperheroesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
