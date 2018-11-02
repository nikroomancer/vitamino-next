import Layout from '../client/components/Layout.js';
import React, {Component} from "react";
import { connect } from "react-redux";
import fetch from 'isomorphic-unfetch';

const mapStateToProps = (state) =>{
    return state;
};

class Index extends Component {

    static async getInitialProps({ store, isServer, pathname, query }) {
        // component will be able to read from store's state when rendered
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
        const data = await res.json();
        console.log(`Show data fetched. Count: ${data.length}`);
        store.dispatch({ type: "FOO", payload: data.length });

        // return {
        //     shows: data
        // }
        // return { custom: "custom" }; // you can pass some custom props to component from here
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
            <Layout>
                <style jsx="true" global="true">{`
        body,html{
            padding: 0 !important;
            margin: 0;
            height: 100%;
            width: 100%;
        }
    `}</style>
            </Layout>
        )
    }
}

export default connect(mapStateToProps,null)(Index);
