import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {Row, Column} from '../styled-components/grid';
import {Hero, SpinningLogo, Navigation, TextPreview} from '../styled-components/Header';
import {setHoverLocation} from "../actions";

class Header extends Component {

    render() {
        const {setHover} = this.props;
        return (
            <Row>
                <Column xs={12}>
                    <Hero>
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
                                        <li><NavLink onMouseEnter={() => setHover('Artiklar')} to="/Artiklar">Artiklar</NavLink></li>
                                        <li><NavLink onMouseEnter={() => setHover('Fakta')} to="/Fakta">Fakta</NavLink></li>
                                        <li><NavLink onMouseEnter={() => setHover('Erbjudanden')} to="/Erbjudanden">Erbjudanden</NavLink></li>
                                        <li><NavLink onMouseEnter={() => setHover('Kontakt')} to="/Kontakt">Kontakt</NavLink></li>
                                    </Navigation>
                                </Row>
                            </Column>
                        </Row>
                    </Hero>
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

export default connect(mapStateToProps,mapDispatchToProps)(Header);
