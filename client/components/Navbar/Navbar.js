import Link from 'next/link'
import css from "./Navbar.less";
import {TABS} from '../../config/constants';
import React, {Component} from "react";
import {createStore} from "redux";
import withRedux from "next-redux-wrapper";
// create a simple reducer
const reducer = (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'FOO':
            return {...state, foo: action.payload};
        default:
            return state
    }
};
// create a store creator
const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};

const linkStyle = {
    marginRight: 15
};

class Navbar extends Component {
    render(){
        const {foo, custom} = this.props;
        return(
            <div className={css.example}>
                <div>{foo}</div>
                <div>{custom}</div>
                {TABS.map((tab,index) => {
                    return <Link key={index} href={tab.route}>
                        <a style={linkStyle}>{tab.name}</a>
                    </Link>
                })}
            </div>
        )
    }
}


Navbar.getInitialProps = ({store, isServer, pathname, query}) => {
    // component will read from store's state when rendered
    store.dispatch({type: 'FOO', payload: 'foo'});
    console.log('hej')
    // pass some custom props to component from here
    return {custom: 'custom'};
};

Navbar =  withRedux(makeStore, (state) => ({foo: state.foo}))(Navbar);
export default Navbar;
