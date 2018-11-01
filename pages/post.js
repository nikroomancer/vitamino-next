import Layout from '../client/components/Layout.js'
import fetch from 'isomorphic-unfetch'
import {getBaseUrl} from '../client/config/constantsHelper';

const Post =  (props) => (
    !!props.show ?
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout> :
    <Layout>
        <h1>{'nooooooo'}</h1>
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;

    // If user is not signed in then redirect to access denied URL
    const baseUrl = getBaseUrl();
    console.log(baseUrl)
    const res1 = await fetch(`${baseUrl}/api/user/1`);
    const res2 = await res1.json()
    console.log(process.env.NODE_ENV);
    let show = null;
    console.log('res1.user', res2)
    if (res2.user) {
        //this.props.url.push('/access-denied')
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        show = await res.json()
        console.log(`Fetched show: ${show.name}`);
    }


    return { show }
}

export default Post
