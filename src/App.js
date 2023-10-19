import { useState, useEffect } from 'react';
import banner from './imgs/banner.png';
import spanish from './imgs/spanish.png';
import english from './imgs/english.png';
import './App.css';

function App() {
  const [path, setPath] = useState('/');
  const [showSpanish, setShowSpanish] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);

  useEffect(() => {
    const p = window.location.pathname;
    setPath(p);
  }, []);

  useEffect(() => {
    if(path === '/english') {
      setShowSpanish(false);
      setShowEnglish(true);
    } else if(path === '/spanish') {
      setShowEnglish(false);
      setShowSpanish(true);
    } else {
      setShowEnglish(false);
      setShowSpanish(false);
    }
  }, [path]);

  const spanishMenuClicked = () => {
    window.history.pushState({}, '', '/spanish');
    setPath('/spanish');
  };

  const englishMenuClicked = () => {
    window.history.pushState({}, '', '/english');
    setPath('/english');
  };

  return (
    <div className="App">
      <div className={`main ${(!showSpanish && !showEnglish) ? 'main-v' : ''}`}>
        <div className="banner">
          <img src={banner} alt="avellana-cafe" />
        </div>
        <button className="m-button es" onClick={spanishMenuClicked}>MENÚ ESPAÑOL</button>
        <button className="m-button en" onClick={englishMenuClicked}>ENGLISH MENU</button>
        <div className="m-space"></div>
      </div>

      <div className="menu-scroller">
        <div className='spanish'>
          <img src={spanish} alt="menu-spanish" className={`menu-image ${showSpanish ? 'menu-image-v' : ''}`} />
        </div>
        <div className='english'>
          <img src={english} alt="menu-english" className={`menu-image ${showEnglish ? 'menu-image-v' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export default App;
