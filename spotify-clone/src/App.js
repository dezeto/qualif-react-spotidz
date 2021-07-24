import logo from './logo.svg';
import './App.scss';
import SamplePage from './pages/SamplePage/SamplePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistPage from './pages/ArtistPage/ArtistPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';

function App() {
  return ( 
    <Router>
      <Switch>
        <Route path="/album/:id">
          <AlbumPage/>
        </Route>
        <Route path="/artist">
          <ArtistPage/>
        </Route>
        <Route path="/">
          <SamplePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;