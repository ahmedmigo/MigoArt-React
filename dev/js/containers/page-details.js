import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {activatePage,nextPage,previousPage} from '../actions/index';
import styled, {keyframes} from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import BubblePager from './bubble-Pager'

const Info = styled.div`
    display: grid;
    grid-template-columns: 50%;
    height:88vh;
    grid-template-areas:
    "content picture";
`
const BubblePagercontainer = styled.div`
    grid-area:bubblePager;
    align-self:center;
    justify-self: center;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 8% 87%;
  grid-template-rows: 5% 14% 10% auto 5% 5%;
  height: inherit;
  grid-template-areas:"bubblePager margin-top"
                      "bubblePager mainHeader"
                      "bubblePager subTitle"
                      "bubblePager body"
                      "bubblePager nextPageNav"
                      "bubblePager margin-bottom";
  background: #272727;
  grid-area: content;
  > h1 {
    grid-area:mainHeader;
    align-self:center;
    color: white;
    font-family: 'Yeseva One', cursive;
    font-size: 48px;
  }
  > h2 {
    grid-area:subTitle;
    color: white;
    align-self:center;
    font-family: 'Yeseva One', cursive;
    font-size: 30px;
  }
  > p {
    grid-area:body;
    align-self:start;
    overflow:auto;
    height:50vh;
    margin-top: 0px;
    color: white;
    font-family: 'Heebo', sans-serif;
    font-size: 20px;
    font-weight: 100;
  }
`
const Picture = styled.div`
  overflow: hidden;
  grid-area: picture;
  box-shadow: 0px 2px 51px 0px rgba(0, 0, 0, 0.5);
  background-color: black;
  > img {
    width:100%;
    display: block;
    margin: 0 auto;
  }
`
const ButtonNav = styled.button`
  font-family: 'Yeseva One', cursive;
  font-size: 20px;
  color: #979797;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  background-color: Transparent;
  transition: color 0.3s ease-out;
  &:hover {
    color: white;
  }
  &:focus {
    outline: none;
  }

`
const ButtonDiv = styled.div`
  grid-area:nextPageNav;
  width: 100%;
  text-align:center;
  justify-self: center;
  align-self: center;
`

const Seprator = styled.div`
  background-color:#B80F0A;
  height: ${props => props.thin ? '1px' : '2px'};
  width:30%;
  border-radius: 3px;
`


class PageDetails extends Component {

  nextButton(activePageNumber,activeSectionPagesLength,activeSection){
    console.log(activeSection.pages[activePageNumber+1].subtitle)
    return (
        <ButtonNav onClick={()=>{this.props.nextPage(activePageNumber,activeSectionPagesLength); }}>
          {activeSection.pages[activePageNumber+1].subtitle}  <img src = '/imgs/arrowDown.png' />
        </ButtonNav>
    );
  }
  previousButton(activePageNumber,activeSectionPagesLength,activeSection){
    return (
        <ButtonNav onClick={()=>{this.props.previousPage(activePageNumber,activeSectionPagesLength); }}>
          {activeSection.pages[activePageNumber-1].subtitle}  <img src = '/imgs/arrowUp.png' />
        </ButtonNav>
    );
  }

  renderNextPreviousButtons(activePageNumber,activeSectionPagesLength,activeSection) {
    if (activeSectionPagesLength > 1 && activePageNumber == 0) {
      return (
        <ButtonDiv>
         {this.nextButton(activePageNumber,activeSectionPagesLength,activeSection)}
       </ButtonDiv>
      );
    }
    else if (activeSectionPagesLength <= 1){
      return (
        <ButtonDiv>
        </ButtonDiv>
      );

    }
    else if (activePageNumber == activeSectionPagesLength -1) {
      return (
        <ButtonDiv>
          {this.previousButton(activePageNumber,activeSectionPagesLength,activeSection)}
        </ButtonDiv>
    );
    } else {
      return (
        <ButtonDiv>
          {this.previousButton(activePageNumber,activeSectionPagesLength,activeSection)}
          {this.nextButton(activePageNumber,activeSectionPagesLength,activeSection)}
        </ButtonDiv>
      );
    }
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("componenetUpdate" ,nextProps,nextState);
  //   return true
  // }
  render() {

    var activeSection = this.props.sections[this.props.activeIndex.activeSection];
    var activePage = activeSection.pages[this.props.activeIndex.activePage];
    console.log(activeSection.title,activePage)
    return (
      <ReactCSSTransitionGroup
        transitionName = "fade"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}
        transitionAppearTimeout={600}
        >
      <Info>
        <Content>
          <h1>{activeSection.title}<Seprator /></h1>
          <h2>{activePage.subtitle}</h2>
          <p>{activePage.body}</p>
          {this.renderNextPreviousButtons(this.props.activeIndex.activePage,activeSection.pages.length,activeSection)}
          <BubblePagercontainer>
            <BubblePager/>
          </BubblePagercontainer>
        </Content>
        <Picture>
          <img src = {activePage.coverPic} />
        </Picture>
      </Info>
      </ReactCSSTransitionGroup>
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
      activatePage: bindActionCreators(activatePage, dispatch),
      nextPage: bindActionCreators(nextPage, dispatch),
      previousPage: bindActionCreators(previousPage, dispatch),
  };
}

export default connect(mapStateToProps , matchDispatchToProps)(PageDetails);
