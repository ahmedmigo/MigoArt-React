import React from 'react';
import PageDetails from '../containers/page-details'
import SectionsList from '../containers/sections-list'
import styled from 'styled-components'

const Outer = styled.div`
    background-color: #0C0C0C;
    position : fixed;
    display:block;
    overflow:auto;
    width:100vw;
    margin: -8px 0px -8px -8px;
    display:grid;
    padding-bottom: 28px;
    grid-template-rows: 62px auto 5%;
    grid-template-columns: 2% auto 2%;
    grid-template-areas:
    "magrin-left header magrin-right"
    "magrin-left details magrin-right"
    "magrin-left magrin-buttom magrin-right";
    align-items: start;
    @media (max-width: 980px) {
      grid-template-rows: 62px auto;
      position : relative;
      padding-bottom: 20px;


    }
`

const HeaderWrapper = styled.div`
    grid-area: header;
`
const PageDetailsWrapper = styled.div`
    grid-area: details;
`
const App = () => (
    <Outer>
      <HeaderWrapper>
        <SectionsList />
      </HeaderWrapper>
      <PageDetailsWrapper>
        <PageDetails />
      </PageDetailsWrapper>
    </Outer>
);

export default App;
