import Link from 'next/link'
import Navbar from './Navbar/Navbar'
const linkStyle = {
    marginRight: 15
};


const Header = () => (
    <div className={'header-wrapper'}>
        <Navbar/>
        <div className={'background-filter'}/>
        <style jsx="true">
            {`
                * {
                    box-sizing: border-box;
                }

                .header-wrapper{
                    background: url('static/images/space-background.jpg') no-repeat;
                    height: 30vh;
                    min-height: 350px;
                    position: relative;
                }

                .background-filter{
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0;

                    background: rgba(0,0,0,0);
                    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.98) 100%);
                    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,0,0,0)), color-stop(26%, rgba(0,0,0,0)), color-stop(50%, rgba(0,0,0,0.32)), color-stop(100%, rgba(0,0,0,0.98)));
                    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.98) 100%);
                    background: -o-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.98) 100%);
                    background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.98) 100%);
                    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.98) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 );
                }
            `}
        </style>
    </div>
);

export default Header;
