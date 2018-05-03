import React, { Component } from 'react';
import logo from './logo.svg';
import Quote from "./Quote.js";
import './App.css';
import { QuoteService } from './QuoteService';

class App extends Component {
  quotes = new QuoteService().getAllQuotes();
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Consumer</h1>
        </header>
        <h1>Quotes</h1>
        <div className="App-body">
          {
            this.quotes.map(m => <Quote quote={m} key={m.Id}></Quote> )
          }
        </div>
      </div>
    );
  }
}

export default App;
