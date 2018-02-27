import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC9ONBIIw1Ut1QfmoHSh0ZQkx7FgKX0iWE';

const App = function() {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
