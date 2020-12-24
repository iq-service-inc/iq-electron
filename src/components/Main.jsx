import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import propTypes from 'prop-types'

import Header from './Header'
import Deshboard from './Deshboard'
import Profile from './Profile'
import { Link } from 'react-router-dom'

class Main extends Component {

    render() {

        const { history } = this.props

        return (
            <ConnectedRouter history={history}>

                <div className='main'>

                    <Route path="/" render={(props) => <Header {...props} />} />

                    

                    <Switch>
                        <Route path="/profile" render={() => <Profile />} />
                        <Route path="/" render={() => <Deshboard />} />
                    </Switch>

                </div>

            </ConnectedRouter>
        )
    }

    static propTypes = {
        history: propTypes.object.isRequired,
    }
}


export default Main