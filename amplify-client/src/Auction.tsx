import * as React from 'react'
import { Query } from 'react-apollo'
import { listAuctions } from './graphql/queries';
import gql from 'graphql-tag';
import { ListAuctionsQuery, ListAuctionsQueryVariables } from './API';

export const Auctions = () => {
    return (
        <Query<ListAuctionsQuery, ListAuctionsQueryVariables> query={gql(listAuctions)}>
            {({data, loading}) => (
                loading ? null : <div>{JSON.stringify(data?.listAuctions)}</div>
            )}
        </Query>
    )
}