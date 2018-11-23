import Header from './Header/Header'

const Layout = (props) => (
    <div>
        {/*<div style={layoutStyle}>*/}
        <Header />
        {props.children}
    </div>
);

export default Layout
