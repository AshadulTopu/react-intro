import logo from './logo.svg';
import './App.css';

import Header from './component/js/header.js';
import AboutUs from './component/js/aboutUs';
import Achievement from './component/js/achievement';
import Feature from './component/js/feature';
import OurTeam from './component/js/ourTeam';
import GetOurApps from './component/js/getOurApps';
import LatestNews from './component/js/latestNews';
import Footer from './component/js/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Header />
      <AboutUs />
      <Achievement />
      <Feature />
      <OurTeam />
      <GetOurApps />
      <LatestNews />
      <Footer />

      
      </header>
    </div>
  );
}

export default App;
