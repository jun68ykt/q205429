import React from 'react';
import {Layout, Header, Navigation,Drawer,Content} from 'react-mdl';


// import Main from './components/main';
// import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
        <Header
          className="header-color"
          title={<span>The Title</span>}>
          <Navigation>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
