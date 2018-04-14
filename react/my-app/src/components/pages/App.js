import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../elements/Menu';
import TicketElement from '../elements/TicketElement';
import {getTickets} from '../../actions/getTickets';

let action = '/fetch';

class App extends Component {

    componentDidMount() {
        this.props.onGetTickets();
    }

    render() {
        return (
            <div>
                <Menu/>
                <div  className="row">
                    <ul className="col s12">
                        <TicketElement/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        tickets: state.tickets,
        ownProps
    }),
    dispatch => ({
        onGetTickets: () => {
            dispatch(getTickets(action));
        }
    })
)(App);
