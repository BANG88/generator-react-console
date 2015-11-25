module.exports = {
  
    <% _states.forEach(function(constants){ %>
    '<%=_prefix %><%=upperName %><%=constants %>': '<%=_prefix %><%=upperName %><%=constants %>',
    <% }); %>
     
}
