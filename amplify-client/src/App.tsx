import React from 'react';
import './App.css';
import { CreateAuctionForm } from './CreateAuctionForm';
import { Auctions } from './Auction';

function App() {
  return (
    <div className="App">
      <CreateAuctionForm></CreateAuctionForm>
      <Auctions></Auctions>
    </div>
  );
}

export default App;
