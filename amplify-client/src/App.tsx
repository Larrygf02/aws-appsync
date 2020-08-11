import React from 'react';
import './App.css';
import { CreateAuctionForm } from './CreateAuctionForm';
import { Auctions } from './Auction';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <CreateAuctionForm></CreateAuctionForm>
      <Auctions></Auctions>
    </div>
  );
}

export default withAuthenticator(App);
