import styled from 'styled-components';
import media from './mediaTemplates';

export const Row = styled.div`
  ${({height}) => height && `height: ${height}`};
  ${({position}) => position && `position: ${position}`};
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div`
  float: left;
  height: 100%;
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};
  ${media.sm`${({ sm }) => sm && getWidthString(sm)};`};
  ${media.md`${({ md }) => md && getWidthString(md)};`};
  ${media.lg`${({ lg }) => lg && getWidthString(lg)};`};
`;
