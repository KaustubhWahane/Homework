import './App.css';
import Card from './components/card';
import WarframeImage from '../src/Images/Warframe.png';
import RdR2 from '../src/Images/Arthur Morgan.jpg';
import Profile from '../src/Images/ThankYou.jpeg'; 
import GTA from '../src/Images/Gta 6.png'; 

function App() {
  return (
    <div className="App">
      <Card
      title="Warframe"
      img= {WarframeImage} 
      footer="This is one of most favorite Games which i use to play for hours"
      />
      <Card
      title="Red Dead Redemption 2"
      img= {RdR2} 
      footer="Most Epic Cutthroat Gameplay with Realistic Real Life beauty and Emotional Choreography"
      />
      <Card
      title="My Profile Pic"
      img= {Profile} 
      footer="This is made by Me"
      />
        <Card
      title="GTA VI"
      img= {GTA} 
      footer="The Most Long Awaited Game waiting nearly a Decade boy we have to wait another year for it"
      />
    </div>
  );
}

export default App;
