import * as React from 'react'
import { Formik } from 'formik'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { createAuction } from './graphql/mutations';
import gql from 'graphql-tag'
import { CreateAuctionMutation, CreateAuctionMutationVariables } from './API';
interface FormValues {
  name: string,
  price: number
}

export const CreateAuctionForm = () => {
    return (
        <Mutation<CreateAuctionMutation, CreateAuctionMutationVariables> 
                mutation={gql(createAuction)}>
            {(createAuction) => (
                <Formik<FormValues>
                    initialValues={{
                        name: "",
                        price:0
                    }} 
                    onSubmit={({name, price}) => {
                        // call mutation
                        console.log({name,price});
                    }}
                >
                    {({values, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                    name="name"
                                    label="Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    margin="normal"
                                />
                                <br></br>
                                <TextField
                                    name="price"
                                    label="Price"
                                    value={values.price}
                                    onChange={handleChange}
                                    margin="normal"
                                />
                                <br/>
                                <Button type="submit" variant="contained">
                                    Submit
                                </Button>
                        </form>
                    )}
                </Formik>
            )}
        </Mutation>
    )
}