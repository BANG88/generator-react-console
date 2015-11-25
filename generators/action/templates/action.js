import ActionType from '../constants/<%=constants %>';
import Dispatcher from '../dispatcher';
import fetch from '../utils/WebApi';


export default {
  get: (params) => {
    //FIXMIE： 发送一个异步请求 
    Dispatcher.dispatchAsync(fetch({  url: '/<%= upperName %>',  data: params }), {
        request: ActionType.<%=_prefix%><%= upperName %>,
        success: ActionType.<%=_prefix%><%= upperName %>_SUC,
        failure: ActionType.<%=_prefix%><%= upperName %>_ERR
      }, { params })      
  }
};


