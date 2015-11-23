import ActionType from '../constants/<%=constants %>';
import Dispatcher from '../dispatcher';
import fetch from '../utils/WebApi';


export default {
  get: (params) => {
    //FIXMIE： 发送一个异步请求 
    Dispatcher.dispatchAsync(fetch({  url: '/<%= upperName %>',  data: params }), {
        request: ActionType.REQUEST_<%= upperName %>,
        success: ActionType.REQUEST_<%= upperName %>_SUCCESS,
        failure: ActionType.REQUEST_<%= upperName %>_ERROR
      }, { params })      
  }
};


