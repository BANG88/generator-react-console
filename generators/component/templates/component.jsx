import React from 'react';
import <%=actions%> from 'actions/<%=actions %>';
import <%=store%> from 'stores/<%=store %>';



//获取数据
function requestData(params){
  
  //FIXME: 根据实际情况修改
  //<%=actions%>.get(params);

}

//获取state
function getState(){
  
  return {
    //FIXME: 动态生成的代码片段，根据实际业务做修改
    <%= lowerName%>:<%=store%>.getAll()
  }

}

export default React.createClass({

  getInitialState() {
    return getState();
  },

  componentDidMount() {
      //request data from server
      requestData();
      <%=store%>.addChangeListener(this._onChange); 
  },

  _onStateChange() {
      this.setState(getState());       
  },

  componentWillUnmount() {
      <%=store%>.removeChangeListener(this._onChange);
  },
    
  render() {
    return (
      <p>Hello, <%= name %>!</p>
    );
  }

});
