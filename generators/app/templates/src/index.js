import React from 'react';
import { render } from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router ,Route} from 'react-router';


const history = useBasename(createHistory)({
    // basename: '/console'
});

const rootRoute = {
    component: 'div',

    childRoutes: [
        {
            path: '/',
            /**
             * 授权相关
             * @param  {[type]} nextState    [description]
             * @param  {[type]} replaceState [description]
             * @return {[type]}              [description]
             */
            onEnter: (nextState, replaceState)=> {
                //FIXME: 获取登录信息
                if (false) {
                    replaceState({nextPathname: nextState.location.pathname}, '/login')
                }
            },
            component: require('./components/App'),
            childRoutes: []
        },
        // 登录
        {
            path: '/login',
            component: require('./components/Login')
        },
        // 404
        {
            path: '*',
            component: require('./components/NotFound')
        }
    ]

};

render(
    <Router history={history} routes={rootRoute}/>,
    document.getElementById('root')
);
