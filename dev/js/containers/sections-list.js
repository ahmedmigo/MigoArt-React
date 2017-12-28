import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {activateSection} from '../actions/index';
import styled, {keyframes} from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    color: ${props => props.active == 'true' ? 'white;' : '#A4A4A4;'};
`


const animationName = keyframes`
  0% { background-color: transparent; }
  100% { background-color: green; }
`


class SectionsList extends Component {
  createListItems() {
    this.props.activateSection(this.props.sections[0],0);
    var selectedIndex = 0;
    return this.props.sections.map((section,i) => {
      return (
        <div key={i} id={'list'+i}>
            <HeaderItems active = {selectedIndex == i ? 'true' : 'false'}
              onClick={()=> {this.props.activateSection(section,i); selectedIndex=i; console.log(selectedIndex)}}
              >
              {section.title}
            </HeaderItems>
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
    sections: state.sections,
  };
}

function matchDispatchToProps(dispatch){
  return {
      activateSection: bindActionCreators(activateSection, dispatch),
  };
}

export default connect(mapStateToProps,matchDispatchToProps)(SectionsList);
