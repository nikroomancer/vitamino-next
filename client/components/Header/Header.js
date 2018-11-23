import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {NavLink} from 'react-router-dom'
import {Row, Column} from '../../styled-components/grid';
import {HeroBackground, HeroContent, SpinningLogo, Navigation, TextPreview} from '../../styled-components/Header';

//import {setHoverLocation} from "../actions";
import fetch from 'isomorphic-unfetch';

class Header extends Component {

    setHoverLocation = (stuff) =>{
        console.log('stuff',stuff)
    }

    render() {
      const PostLink = (props) => (
        <li>
          <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
          </Link>
        </li>
      )
        //const {setHover} = this.props;
        const setHover = this.setHoverLocation;
        return (
            <Row height={'250px'} position={'relative'}>
                <Column xs={12}>
                    <HeroBackground>
                    </HeroBackground>
                    <HeroContent>
                      <Row height={'30%'}/>
                      <Row height={'70%'}>
                        <Column xs={3} sm={2}>
                          <SpinningLogo/>
                        </Column>
                        <Column xs={9} sm={10}>
                          <Row height={'70%'}>
                            <TextPreview>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Maecenas turpis magna, posuere et pellentesque a, ornare euismod augue.
                              Pellentesque ornare lorem ut pretium iaculis.
                            </TextPreview>
                          </Row>
                          <Row height={'30%'}>
                            <Navigation>
                              <li><a onMouseEnter={() => setHover('Artiklar')} to="/Artiklar">Artiklar</a></li>
                              <li><a onMouseEnter={() => setHover('Fakta')} to="/Fakta">Fakta</a></li>
                              <li><a onMouseEnter={() => setHover('Erbjudanden')} to="/Erbjudanden">Erbjudanden</a></li>
                              <li><a onMouseEnter={() => setHover('Kontakt')} to="/Kontakt">Kontakt</a></li>
                            </Navigation>
                          </Row>
                        </Column>
                      </Row>
                    </HeroContent>
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

export default connect(null,null)(Header);
