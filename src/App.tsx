import './App.css';
import DebouncePage from './pages/DebouncePage';
import ThrottlePage from './pages/ThrottlePage';

function App() {
  return (
    <section style={{ width: '80vw' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DebouncePage></DebouncePage>
        <ThrottlePage></ThrottlePage>
      </div>
    </section>
  );
}

export default App;
