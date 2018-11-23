import styled, {css}from 'styled-components';

// export const BoxInner = styled.div`
//     background: lightskyblue;
//     width: 100%;
//     height: 100%;
//     border: 2px solid #9b9797;
//     border-radius: 4px;
//     padding: 20px;
//     ${props => props.alternateColor && css`
//         background: salmon;
//     `};
//     ${props => props.alternatePadding && css`
//         padding: 30px;
//     `};
// `;

export const AddArticleIcon=styled.div`
  width: 75px;
  height: 75px;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  opacity: 0.5;
  background-image: url('../../static/images/add-article.svg');
  &:hover{
    opacity: 0.9;
  }
`;

