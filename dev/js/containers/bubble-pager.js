import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled, {keyframes} from 'styled-components'
import {activatePage} from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Bubble = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-color: ${props => props.active == 1 ? '#B80F0A;' : '#0C0C0C;'};
    &:hover {
      animation: ${animation} 0.5s ease-out forwards;
    }
`

function animation (props) {
  return keyframes`
    to {
      background-color: #520200;
    }
  `
}

class BubblePager extends Component {
  createListItems() {
    var activeSection = this.props.sections[this.props.activeIndex.activeSection];
    var activeSectionPagesLength = activeSection.pages;
    return activeSectionPagesLength.map((page,i) => {
      return (
          <Bubble key={"bubble"+i} active = {(this.props.activeIndex.activePage+1)/(i+1)}
           onClick={()=>{this.props.activatePage(i); }}/>
      );
    })
  }

  render() {
    return (
        <div>
          <ReactCSSTransitionGroup
            transitionName = "fade"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionAppear={true}
            transitionAppearTimeout={600}
            >
            {this.createListItems()}
          </ReactCSSTransitionGroup>
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    activeIndex: state.activeIndex,
    sections: state.sections,
  };
}


function matchDispatchToProps(dispatch){
  return {
      activatePage: bindActionCreators(activatePage, dispatch),
  };
}

export default connect(mapStateToProps , matchDispatchToProps)(BubblePager);
