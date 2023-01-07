import './App.css';
import Header from './components/header/header';
import Stacking from './components/stacking/stacking';
// import bgVideo from './images/bg.mp4';

function App() {
  return (
    <div className="App">
      <div><Header /></div>
      <div><Stacking /></div>
      {/* <video className='videoTag' autoPlay loop muted>
    <source src={bgVideo} type='video/mp4' />
      </video> */}
    </div>
  );
}

export default App;
