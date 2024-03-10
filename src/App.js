import './App.css';
import './components/intro'
import Intro from './components/intro';
import Profile from './components/profile';
import Button from './components/button';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const myName = 'Sahril Mahendra';
  const navbarText = 'Help';
  const lang = 'React JS';
  const names = myName.split(" ");

  const clicked = () => {
    return alert("button clicked")
  }

  const profile = () => {
    return (
    <div>
      <h1>Profile</h1>
      <marquee>test profile</marquee>
    </div>
    )
  }

  return (
    <div>
      <Navbar text={navbarText}/>
      <Intro name={names[0]} lang={lang}/>
      <Intro name={names[1]} lang={lang}/>

      <Profile profile={profile}/>
      <Button click={clicked}/>
      <Footer/>
    </div>
  );
}

export default App;
