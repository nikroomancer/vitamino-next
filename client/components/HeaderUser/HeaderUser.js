import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {NavLink} from 'react-router-dom'
import {Row, Column} from '../../styled-components/grid';
import {Hero, SpinningLogo, Navigation, TextPreview} from '../../styled-components/Header';
//import {setHoverLocation} from "../actions";
import Navbar from '../Navbar/Navbar';
import fetch from 'isomorphic-unfetch';

class HeaderUser extends Component {

    setHoverLocation = (stuff) =>{
        console.log('stuff',stuff)
    }

    render() {
        //const {setHover} = this.props;
        const setHover = this.setHoverLocation;
        return (
            <Row>
                <Column xs={12}>
                  <Navbar/>
                </Column>
            </Row>
        );
    }
}

function mapStateToProps({hoverReducer}) {
    return {hoverReducer};
}

function mapDispatchToProps(dispatch) {
    return {
        setHover: (location) => dispatch(setHoverLocation(location))
    };
}

export default connect(null,null)(HeaderUser);
