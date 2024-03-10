import './App.css';
import './components/intro'
import Intro from './components/intro';
import Profile from './components/profile';
import Button from './components/button';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Intro name='Syahryil' lang='React JS'/>
      <Intro name='Mahendra' lang='React JS'/>

      <Profile/>
      <Button/>
      <Footer/>
    </div>
  );
}

export default App;
