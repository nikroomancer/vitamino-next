import Layout from '../client/components/LayoutUser.js';
import React, {Component} from "react";
import { connect } from "react-redux";
import fetch from 'isomorphic-unfetch';
import {getBaseUrl} from "../client/config/constantsHelper";

const mapStateToProps = (state) =>{
    return state;
};

class User extends Component {

    /*static async getInitialProps({ store, isServer, pathname, query }) {
        //component will be able to read from store's state when rendered
        const baseUrl = getBaseUrl();
        console.log('hejjdjd')
        //console.log(baseUrl)
        //const res = await fetch(`${baseUrl}/api/user`);
        //res = await res.json();
        //console.log(res);
        //
        //
        //return { store, isServer, pathname, query }; // you can pass some custom props to component from here
    }*/
    static getInitialProps = async function (context) {
        console.log('context')
        console.log(context.query.user)
        context.store.dispatch({ type: "FOO", payload: context.query.user });
    }


    componentDidUpdate(){
        console.log('component update User')
    }

    componentDidMount(){
        console.log('component mount User')
    }

    render(){
        console.log('User props')
        console.log(this.props);
        console.log('User state')
        console.log(this.state);
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

export default connect(mapStateToProps,null)(User);
