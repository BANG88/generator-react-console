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

  _onChange() {
      this.setState(getState());       
  },

  componentWillUnmount() {
      <%=store%>.removeChangeListener(this._onChange);
  },
  <% if (!subModule) { %>
   render() {
    //aside 用来区分左边菜单栏
    //childComponent 传递子组件到container
    // {...this.props} 如果要生成面包屑就需要传递route相关信息到container    
    return (<Container aside="<%= name %>"  {...this.props} childComponent={this.props.children}>
     <h3>Hello,<%= name %></h3>
    </Container>);
  }
  <% } else { %>
  
  render() {
    return (
      <p>Hello, <%= name %>!</p>
    );
  }
 <% } %>
});
