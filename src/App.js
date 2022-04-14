import logo from './logo.svg';
import './App.css';
import { useToggle } from './hooks/useToggle';
import { Books } from './components/Books';
import { books } from './data/books';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [isVisible, toggleIsVisible] = useToggle(true);
  const [order, setOrder] = useLocalStorage('order', []);

  const addToOrder = id => {
    const newItem = books.find(item => item.id === id);
    setOrder([...order, newItem]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => toggleIsVisible()}>Toggle React</button>
        {isVisible && (
          <>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'>
              Learn React
            </a>
          </>
        )}
        <div>
          <Books items={books} addToOrder={addToOrder} />
        </div>
      </header>
    </div>
  );
}

export default App;
