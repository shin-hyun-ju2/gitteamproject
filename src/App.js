import './App.css';
import Install from './install';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      <h1>PWA 테스트</h1>
      <Install />
      <StarRating itemId={1} />
      <StarRating itemId={2} />
      <StarRating itemId={3} />
    </div>
  );
}

export default App;
