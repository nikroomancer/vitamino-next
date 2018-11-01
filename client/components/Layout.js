import Header from './Header'

// const layoutStyle = {
//     margin: 20,
//     padding: 20,
//     maxWidth: 1240,
//     border: '1px solid #DDD'
// }

const Layout = (props) => (
    <div>
        {/*<div style={layoutStyle}>*/}
        <Header />
        {props.children}
    </div>
);

export default Layout
