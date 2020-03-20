import React from 'react';
import { Layout } from 'antd';
import HeaderMenu from './header';
import {connect} from 'react-redux';
import {push} from 'connected-react-router'; 
import './styles.scss';

const {Header, Content, Footer} = Layout;

const BasicLayout = (props) => {
  const backHome = () => {
    props.push('/')
  }
  const {router: {location}} = props;
  const isRoot = location.pathname === "/";
  
  return (
    <Layout className="basic-layout">
      <Header  className="header-wrap">
        <HeaderMenu onBackHome={backHome} isRoot={isRoot}/>
      </Header>
      <Content>
      <div className="container">
        <main>
          {props.children}
        </main>
      </div>
      </Content>
    </Layout>
    
  )
}

const mapStateToProps = state => (state)

export default connect(mapStateToProps, {push})(BasicLayout)