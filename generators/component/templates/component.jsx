import React from 'react';
import <%=actions%> from 'actions/<%=actions %>';
import <%=store%> from 'stores/<%=store %>';

export default React.createClass({

  getInitialState() {
    return {};
  },

  componentDidMount() {

  },
  componentWillUnmout(){

  },
  render() {
    return (
      <p>Hello, <%= name %>!</p>
    );
  }

});
