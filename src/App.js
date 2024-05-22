// App.js
import React from 'react';
import Header from './components/Header';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
import Main from './components/Main';
import './styles.css'; // Import the CSS styles

const App = () => {
  return (
    <body>
      <div className="App">
        <Header />
        <div className="Main">
          <Main />
        </div>
      </div>
    </body>
  );
};

export default App;
