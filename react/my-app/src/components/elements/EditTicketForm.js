import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditTicketForm extends Component {
    render() {
        return (
            <div  className="row">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="ticket_name" type="text" ref={(input) => { this.ticketNameInput = input }} />
                        <label htmlFor="ticket_name">Ticket name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea"  ref={(input) => { this.ticketDescriptionInput = input }}/>
                        <label htmlFor="textarea1">Ticket description</label>
                    </div>
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
        onAddTicket: (ticket) => {
            const addTickets = () => {
                return dispatch => {
                    return fetch('/insert', {
                        method: "POST",
                        body: JSON.stringify({ticket: ticket}),
                        headers: {'Content-Type': 'application/json'}
                    })
                        .then((response) => {
                            if(response.status == 200){
                                console.log(ticket + 3443);
                                dispatch({ type: 'ADD_TICKET', payload: ticket });
                            } else {
                                dispatch({ type: 'TICKET_ERROR', payload: "addTICKET error" })
                            }
                        });
                }
            };
            dispatch(addTickets());
        },
    })
)(EditTicketForm);