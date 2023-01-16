import './App.css';
import Header from './components/header/header';
import Stacking from './components/stacking/stacking';
import Profile from './components/Profile';
// import bgVideo from './images/bg.mp4';

function App() {
  return (
    <div className="App">
      <Profile />
      <Header />
      <Stacking />
      {/* <video className='videoTag' autoPlay loop muted>
    <source src={bgVideo} type='video/mp4' />
      </video> */}
    </div>
  );
}

export default App;
