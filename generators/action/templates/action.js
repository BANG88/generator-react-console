import ActionType from '../constants/<%=constants %>';
import Dispatcher from '../dispatcher';
import fetch from '../utils/WebApi';


export default {
    get: (params)=> {

        Dispatcher.dispatch({
            actionType: ActionType.REQUEST_<%= upperName %>
        })

    }
};


