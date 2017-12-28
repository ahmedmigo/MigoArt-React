import React from 'react';
import PageDetails from '../containers/page-details'
import SectionsList from '../containers/sections-list'
import styled from 'styled-components'

const Outer = styled.div`
    background-color: #0C0C0C;
    position : fixed;
    width:100%;
    margin: -8px 0px -8px -8px;
    display:grid;
    grid-template-rows: 62px auto;
    grid-template-areas:
    "header"
    "details";
`

const App = () => (
    <Outer>
      <SectionsList />
      <PageDetails />
    </Outer>
);

export default App;
