import './App.css';
import Counter from './components/counters/Counter';
import MainTitle from './components/MainTitle';
import Title from './components/Title';

function App() {
  return (
    <div className='App container'>
      <MainTitle />
      <Title>Events and Hooks</Title>
      <Counter />
    </div>
  );
}

export default App;
