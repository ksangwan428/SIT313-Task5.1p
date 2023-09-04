import React from 'react';
import ConditionalRendering from './components/conditionalRendering';
import PostButton from './components/PostButton';
import './App.css';

function App() {
  return (
    <div className='main'>
      <ConditionalRendering />
      <PostButton />
    </div>
  );
}

export default App;