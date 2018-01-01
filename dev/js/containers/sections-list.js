import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {activateSection} from '../actions/index';
import styled, {keyframes} from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


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
      @media (max-width: 980px) {
        font-size: 30px;
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
    @media (max-width: 980px) {
      height: 38px;
    }
`

const HeaderItems = styled.li`
    transition: color 0.3s ease-out;
    cursor:pointer;
    color: ${props => props.active == 'true' ? 'white;' : '#A4A4A4;'};
    &:hover {
      color: #B80F0A;
    }
`


const animationName = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0;}
  100% { opacity: 1; }
`
const fadeOutIn = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0;}
  100% { opacity: 1; }
`

class SectionsList extends Component {
  createListItems() {
    return this.props.sections.map((section,i) => {
      return (
        <div key={i} id={'list'+i}>
            <HeaderItems active = {this.props.activeIndex.activeSection == i ? 'true' : 'false'}
              onClick={()=> {this.props.activateSection(i);}}
              >
              {section.title}
            </HeaderItems>
        </div>
      );
    })
  }
  render() {
    return (
      <div>
        <Logo src = '/imgs/logo.png'/>
        <PageNav>
            {this.createListItems()}
        </PageNav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: state.sections,
    activeIndex: state.activeIndex
  };
}

function matchDispatchToProps(dispatch){
  return {
      activateSection: bindActionCreators(activateSection, dispatch),
  };
}

export default connect(mapStateToProps,matchDispatchToProps)(SectionsList);
