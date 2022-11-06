import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import LightBox from './components/lighBox.js/LightBox';
function App() {
  return (
    <div className="App container">
      <Header />
      <Content />
      <LightBox />
    </div>
  );
}

export default App;
