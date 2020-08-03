import * as React from 'react'
import { Query } from 'react-apollo'
import { listAuctions } from './graphql/queries';
import gql from 'graphql-tag';
import { ListAuctionsQuery, ListAuctionsQueryVariables } from './API';
import { AuctionCard } from './AuctionCard';

export const Auctions = () => {
    return (
        <Query<ListAuctionsQuery, ListAuctionsQueryVariables> query={gql(listAuctions)}>
            {({data, loading}) => (
                loading ||
                !data ||
                !data.listAuctions ||
                !data.listAuctions.items ? null : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gridGap: 10
                    }}>
                        {data.listAuctions.items.map(x => (
                            <AuctionCard key={x?.id}/>
                        ))}
                    </div>)
            )}
        </Query>
    )
}