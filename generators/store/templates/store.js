import ActionType from '../constants/<%=constants %>';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';



const <%=lowerName %> = {};

const <%= capitalizeFileName %> = createStore({

  getAll(){
    return <%=lowerName %>;
  },

  get(id) {
    return <%=lowerName %>[id];
  }
});

<%= capitalizeFileName %>.dispatchToken = Dispatcher.register(action => {

  switch(action.actionType){
          case ActionType.REQUEST_<%=upperName%>:
                  //TODO 设置值,出发事件
            <%= capitalizeFileName %>.emitChange();
            break;
    default:
            break;
  }

});

export default  <%= capitalizeFileName %>;

