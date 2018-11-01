import Layout from '../client/components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
    <Layout>
        {/*<h1 className={'title'}>Batman TV Shows</h1>*/}
        {/*<h1 className={'test'}>Batman TV Shows</h1>*/}
        {/*<ul>*/}
            {/*{props.shows.map(({show}) => (*/}
                {/*<li key={show.id}>*/}
                    {/*<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>*/}
                        {/*<a>{show.name}</a>*/}
                    {/*</Link>*/}
                {/*</li>*/}
            {/*))}*/}
        {/*</ul>*/}
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

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
};

export default Index
