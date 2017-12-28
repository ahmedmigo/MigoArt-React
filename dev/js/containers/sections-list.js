import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {activateSection} from '../actions/index';
import styled from 'styled-components'

const Header = styled.div`
    grid-area: header;
`

const PageNav = styled.ul`
    list-style-type: none;
    margin: auto;
    padding: 0;
    overflow: hidden;
    float: right;
    margin-right: 5%;
    > div {
      float: left;
      display: block;
      color: ${props => props.active ? 'white;' : '#A4A4A4;'};
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-family: 'Heebo', sans-serif;
      font-weight: 300;
      font-size: 20px;
      transition: color 0.3s ease-out;
      &:hover {
        color: #B80F0A;
      }
    }
`
const Logo = styled.img`
    height: 28px;
    float: left;
    display: block;
    margin-top: 15px;
    margin-bottom: auto;
    margin-left: 5%;
`

const HeaderItems = styled.li`
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  &:hover {
    background-color: #555;
    color: white;
  }
  &:active {
    background-color: #4CAF50;
    color: white;
  }
`

class SectionsList extends Component {
  createListItems() {
    this.props.activateSection(this.props.sections[0]);
    return this.props.sections.map((section,i) => {
      return (
        <div key={i}>
            <li
              onClick={()=> {this.props.activateSection(section);}}
              >
              {section.title}
            </li>
        </div>
      );
    })
  }
  render() {
    return (
      <Header>
        <Logo src = '/imgs/logo.png'/>
        <PageNav>
          {this.createListItems()}
        </PageNav>
      </Header>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.sections
  };
}

function matchDispatchToProps(dispatch){
  return {
      activateSection: bindActionCreators(activateSection, dispatch),
  };
}

export default connect(mapStateToProps,matchDispatchToProps)(SectionsList);
