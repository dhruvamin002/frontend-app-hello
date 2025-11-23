import React from 'react';
import ReactDOM from 'react-dom';
import { initialize } from '@edx/frontend-platform';

function App() {
  return <h1>Hello from Custom MFE!</h1>;
}

initialize().then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
