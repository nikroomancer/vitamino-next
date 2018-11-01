import Link from 'next/link'
import css from "./Navbar.less";

const linkStyle = {
    marginRight: 15
};

const Navbar = () => (
    <div className={css.example}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Navbar;
