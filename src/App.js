import './App.css';
import Install from './install';
import StarRating from './components/StarRating';

import { Routes, Route } from 'react-router-dom';

import Cart from './cart/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* 각 경로에 맞는 컴포넌트를 렌더링 */}
        <Route path="/" element={
          <>
            <h1>PWA 테스트</h1>
            <Install />
            <StarRating itemId={1} />
            <StarRating itemId={2} />
            <StarRating itemId={3} />
          </>
        } />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
