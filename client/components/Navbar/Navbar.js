import Link from 'next/link'
import css from "./Navbar.less";
import {USER_TABS} from '../../config/constants';
import React, {Component} from "react";
import {createStore} from "redux";
import withRedux from "next-redux-wrapper";
import {Nav, NavLink, NavLogo, NavItem} from '../../styled-components/UserNav';
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

      const NavBar = (props) => (
          <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
          </Link>
      )

        const {foo, custom} = this.props;
        return(
          <Nav>
            {USER_TABS.map((tab,index) => {
              return <Link key={index} href={tab.route}>
                <NavItem>
                  <NavLink>{tab.name}</NavLink>
                </NavItem>
              </Link>
            })}
          </Nav>
        )
    }
}


Navbar.getInitialProps = ({store, isServer, pathname, query}) => {
    // component will read from store's state when rendered
    store.dispatch({type: 'FOO', payload: 'foo'});
    console.log('hejfrånnavbar')
    // pass some custom props to component from here
    return {custom: 'custom'};
};

Navbar =  withRedux(makeStore, (state) => ({foo: state.foo}))(Navbar);
export default Navbar;
