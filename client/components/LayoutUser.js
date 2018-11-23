import HeaderUser from './HeaderUser/HeaderUser'
import {Row, Column} from '../styled-components/grid'

const Layout = (props) => (
    <div>
        {/*<div style={layoutStyle}>*/}
        <HeaderUser />
        <Row>
          <Column xs={12}>
            {props.children}
          </Column>
        </Row>
    </div>
);

export default Layout
