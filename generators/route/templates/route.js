/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: '<%=lowerName%>',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/<%=capitalizeName %>'))
        })
    },

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                //require('./routes/xx')
            ])
        })
    }
}
