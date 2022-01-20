import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [config, setConfig] = useState({ paddingTop: '56.6%' });

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();
    return _ => {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  function onResize() {
    let padding = (window.innerHeight / window.innerWidth) * 100;
    setConfig(prevState => ({
      ...prevState,
      paddingTop: padding + '%'
    }));
  }

  return (
        
      <div className="App" style={config}>
        <div>
                   
        </div>
      </div>
  );
}

export default App;
