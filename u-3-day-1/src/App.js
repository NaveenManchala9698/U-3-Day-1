import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import img from './images/pic-1.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent name="Like" color="#646FD4" font="italic" size="25px" width="150px" />
        <ButtonComponent name="Share" color="#9CE3A8" font="oblique" size="25px" width="150px" />
        <ButtonComponent name="Subscribe" color="#F95738" font="normal" size="25px" width="150px" />
        <ImageComponent image="https://www.travelwanderlust.co/wp-content/uploads/2021/06/set-new-travel-goals-most-beautiful-landscapes-banner.jpg" imgheight="400px" imgwidth="600px" />
        <ImageComponent image={img} imgheight="400px" imgwidth="600px" />
      </header>
    </div>
  );
}

export default App;
