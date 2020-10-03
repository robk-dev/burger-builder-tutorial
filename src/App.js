import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

import axios from 'axios';

export const auth = async () => {
    const authData = {
        username: 'robk123',
        password: 'password123'
    }

    const data = {
        "first_name": "Firstname",
        "last_name": "LastName",
        "username": "user12345",
        "email": "example@example.com",
        "password": "password123",
        "confirm_password": "password123",
        "age": 27
    };

    const instance = axios.create({ withCredentials: true });

    // const res = await instance.get('http://localhost:8080/');
    // console.log({ res });
    instance.post('http://localhost:8080/api/accounts', data)
        .then(response => {
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        });

};

class App extends Component {
    async componentDidMount() {
        auth();
    }
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/auth" component={Auth} />
                        <Route path="/" exact component={BurgerBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
