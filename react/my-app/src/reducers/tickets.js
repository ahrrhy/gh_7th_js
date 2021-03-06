export default function taskList(state = [], action) {
    if (action.type === 'ADD_TICKET') {
        return [
            ...state,
            action.payload
        ];
    }
    else if (action.type === 'EDIT_TICKET') {
        return [
            action.payload
        ];
    }
    else if (action.type === 'TICKET_ERROR') {
        return action.payload;
    }
    else if (action.type === 'FETCH_TICKETS_SUCCESS') {
        return [
            ...action.payload
        ]
    }
    else if (action.type === 'TOGGLE_FAVORITE') {
        return state.map(ticket => {
            if (ticket._id === action.payload._id) {
                ticket = {
                    ...action.payload
                };
                return ticket
            }
            return ticket;
        });
    }
    else if (action.type === 'TOGGLE_DONE') {
        return state.map(ticket => {
            if (ticket._id === action.payload._id) {
                ticket = {
                    ...action.payload
                };
                return ticket
            }
            return ticket;
        });
    }
    else if (action.type === 'GET_TICKET_DATA') {
        return state.filter(ticket => ticket._id === action);
    }
    else if (action.type === 'DELETE_TICKET') {
        return state.filter(ticket => ticket._id !== action._id)
    }
    return state;
}