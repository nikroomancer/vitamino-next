import styled from 'styled-components';
//import heroBackground from '../../static/images/hero-background.jpeg';
//import spinningLogo from '../../static/images/spinning-logo.gif';
import { darken } from 'polished';

export const HeroBackground = styled.div`
    background-image: url(${'../../static/images/hero-background.jpeg'});
    background-repeat: ${props => props.theme.Hero.backgroundRepeat};
    background-position: ${props => props.theme.Hero.backgroundPosition};
    background-size: ${props => props.theme.Hero.backgroundSize};
    width: ${props => props.theme.Hero.width};
    height: ${props => props.theme.Hero.height};
    position: ${props => props.theme.Hero.position};
    color: white;
    filter: blur(0.3px);
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right,rgba(0,0,0,0.31),rgba(255,255,255,0.41));
      opacity: .6;
      
            }
`;

export const HeroContent = styled.div`
  position:relative;
  height: 100%;
`;

export const SpinningLogo = styled.div`
    background-image: url(${'../../static/images/spinning-logo.gif'});
    width: ${props => props.theme.SpinningLogo.width};
    height: ${props => props.theme.SpinningLogo.height}; 
    background-repeat: ${props => props.theme.SpinningLogo.backgroundRepeat};
    background-position: ${props => props.theme.SpinningLogo.backgroundPosition};
    background-size: ${props => props.theme.SpinningLogo.backgroundSize};
`;

export const Navigation = styled.ul`
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    list-style: none; 
    flex-direction: row;
    margin: ${props => props.theme.Navigation.margin};
    li{
        flex: 1;
        display: inline-block;
        a{
            color: ${darken(0.3, '#ffffff')};
            &.active{
                color: #ffffff;
            }
        }
    }
`;

export const TextPreview = styled.div`
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    font-size: 14px;
    height: 100%;
    padding: 20px 7%;
    max-width: 700px;
    margin: 0 auto;
    color: #b3b3b3;
`;
