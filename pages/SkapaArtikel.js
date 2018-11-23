import LayoutUser from '../client/components/LayoutUser.js';
import React, {Component} from "react";
import { connect } from "react-redux";
import fetch from 'isomorphic-unfetch';
import {Row, Column} from '../client/styled-components/grid';

const mapStateToProps = (state) =>{
    return state;
};

class SkapaArtikel extends Component {

    static async getInitialProps({ store, isServer, pathname, query }) {
        //component will be able to read from store's state when rendered
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
        const data = await res.json();
        console.log(`Show data fetched. Count: ${data.length*3}`);
        store.dispatch({ type: "FOO", payload: data.length*2 });

        return { custom: "custom" }; // you can pass some custom props to component from here
    }

    componentDidUpdate(){
        console.log('component update index')
    }

    componentDidMount(){
        console.log('component mount index')
    }

    render(){
        const {foo} = this.props;
        console.log('length:', foo)
        return(
            <LayoutUser>
                <style jsx="true" global="true">{`
        body,html{
            padding: 0 !important;
            margin: 0;
            height: 100%;
            width: 100%;
        }
    `}</style>
              <Row>
                <Column padding={'20px'} xs={12}>
                  skapaArtikel
                </Column>
              </Row>
            </LayoutUser>
        )
    }
}

export default connect(mapStateToProps,null)(SkapaArtikel);
