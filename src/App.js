import './App.css';
import './components/intro'
import Intro from './components/intro';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Intro name='Syahryil' lang='React JS'/>
      <Intro name='Mahendra' lang='React JS'/>

      <Profile/>
    </div>
  );
}

export default App;
