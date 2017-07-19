import React, {Component} from 'react';
import Query from './Query'
import {connect} from 'react-redux'
import MaintainTable from './MaintainTable'

class App extends Component {
    render() {
        return (
            <div>
                <Query/>
                <MaintainTable/>
            </div>
        );
    }
}

App = connect()(App)

export default App;