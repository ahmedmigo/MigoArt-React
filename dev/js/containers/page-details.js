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
    padding-bottom: 0px;
    @media (max-width: 980px) {
      grid-template-rows: 900px 70%;
      grid-template-columns: 100%;
      padding-bottom: 38px;
      grid-template-areas:
      "picture"
      "content" ;
      height: max-content;
    }

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
  @media (max-width: 980px) {
    height: fit-content;
    padding-bottom: 30px;
  }
  > h1 {
    grid-area:mainHeader;
    align-self:center;
    color: white;
    font-family: 'Heebo', sans-serif;
    font-weight: 100;
    font-size: 48px;
    @media (max-width: 980px) {
      font-size: 80px;
    }
  }
  > h2 {
    grid-area:subTitle;
    color: white;
    align-self:center;
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
    margin-bottom: 0px;
    font-size: 30px;
    animation:  ${uptransation} 0.5s ease-out forwards;
    @media (max-width: 980px) {
      font-size: 38px;
    }
  }
  > p {
    grid-area:body;
    align-self:start;
    overflow:auto;
    height:50vh;
    link="white";
    margin-top: 0px;
    color: white;
    transition: margin-top 1s ease-out;
    animation:  ${uptransation} 0.5s ease-out forwards;
    font-family: 'Heebo', sans-serif;
    font-size: 20px;
    font-weight: 100;
    @media (max-width: 980px) {
      font-size: 28px;
      height: 100%;
    }
  }
`
const LinkText = styled.a`
  color: white;
  transition: color 0.3s ease-out;
  &:visited {
    color: white;
  }
  &:hover {
    color: #B80F0A;
  }
  &:active {
    color: #B80F0A;
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
    animation:  ${uptransation} 0.5s ease-out forwards;
    margin: 0 auto;
  }
`
const ButtonNav = styled.button`
  font-family: 'Heebo', sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: ${props => props.next ? 'white' : '#7F7F7F'};
  border: none;
  cursor:pointer;
  margin-left: 10px;
  margin-right: 10px;
  background-color: Transparent;
  transition: color 0.3s ease-out;
  &:hover {
    color: #B80F0A;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 980px) {
    font-size: 30px;
  }
`
const ButtonDiv = styled.div`
  grid-area:nextPageNav;
  width: 100%;
  cursor:pointer;
  text-align:center;
  justify-self: center;
  align-self: center;
`

const ButtonArrow = styled.img`
  height: 10px;
  @media (max-width: 980px) {
    height: 15px;
  }
`

const Seprator = styled.div`
  background-color:#B80F0A;
  height: ${props => props.thin ? '1px' : '2px'};
  width:30%;
  border-radius: 3px;
`


function uptransation (props) {
  return keyframes`
    0%{
      opacity: 0;
      margin-top: 33px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  `
}

function downtransation (props) {
  return keyframes`
    to {
      background-color: #520200;
    }
  `
}

function hyberlinkStringArrary (string) {
  var iStart = string.indexOf("https://");
  var stringhyberLinksArray = []
  if (iStart != -1) {
    var splitStrign = string.substr(iStart,string.length-1)
    var iEnd = splitStrign.indexOf(' ');
    if(iEnd!= -1) {
      splitStrign = string.substr(iEnd,string.length-1)
      if (iStart != 0)
      {
        stringhyberLinksArray.push(string.substr(0,iStart-1))
      }
      stringhyberLinksArray.push(string.substr(iStart,iEnd))
      stringhyberLinksArray.concat(hyberlinkStringArrary(splitStrign))
    } else {
        if (iStart != 0)
        {
          stringhyberLinksArray.push(string.substr(0,iStart-1))
        }
        stringhyberLinksArray.push(string.substr(iStart,string.length-1))
    }
      return stringhyberLinksArray;
  } else {
    stringhyberLinksArray.push(string)
    return stringhyberLinksArray;
  }
}

function formatedParagraph (newText){
  newText = newText.split("\n").map(function(item, key) {
    return (
      <span key={'newline' + key}>
        {hyberlinkStringArrary(item).map(function(string, index){
                    if (string.substr(0,8) == "https://"){
                      return (
                        <LinkText key={"hyberLink" + index } href={string} target="_blank">{string}</LinkText>
                      )
                    } else {
                      return <span key={"text" + index }>{string}</span> ;
                    }
                 })}
        <br/>
      </span>
    )
  })
  return newText
}
class PageDetails extends Component {

  nextButton(activePageNumber,activeSectionPagesLength,activeSection){
    return (
        <ButtonNav next key={'nextButton + activePageNumber'} onClick={()=>{this.props.nextPage(activePageNumber,activeSectionPagesLength); }}>
          {activeSection.pages[activePageNumber+1].subtitle}  <ButtonArrow src = '/imgs/arrowDown.png' />
        </ButtonNav>
    );
  }
  previousButton(activePageNumber,activeSectionPagesLength,activeSection){
    return (
        <ButtonNav key={'previousButton + activePageNumber'} onClick={()=>{this.props.previousPage(activePageNumber,activeSectionPagesLength); }}>
          {activeSection.pages[activePageNumber-1].subtitle}  <ButtonArrow src = '/imgs/arrowUp.png' />
        </ButtonNav>
    );
  }

  renderNextPreviousButtons(activePageNumber,activeSectionPagesLength,activeSection) {
    if (activeSectionPagesLength > 1 && activePageNumber == 0) {
      return (
        <ButtonDiv key={'nextButton'}>
         {this.nextButton(activePageNumber,activeSectionPagesLength,activeSection)}
       </ButtonDiv>
      );
    }
    else if (activeSectionPagesLength <= 1){
      return (
        <ButtonDiv key={'noButtons'}>
        </ButtonDiv>
      );

    }
    else if (activePageNumber == activeSectionPagesLength -1) {
      return (
        <ButtonDiv key={'previousButton'}>
          {this.previousButton(activePageNumber,activeSectionPagesLength,activeSection)}
        </ButtonDiv>
    );
    } else {
      return (
        <ButtonDiv key={'twoButtons'}>
          {this.nextButton(activePageNumber,activeSectionPagesLength,activeSection)}
          {this.previousButton(activePageNumber,activeSectionPagesLength,activeSection)}
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
    return (
      <ReactCSSTransitionGroup
        transitionName = "fade"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={true}
        transitionAppearTimeout={600}
        >
      <Info key={'info'}>
        <Content key={'content'}>
          <h1 key = {'contenth1' + this.props.activeIndex.activeSection}>{activeSection.title}<Seprator /></h1>
          <h2 key = {'contenth2' + this.props.activeIndex.activeSection + this.props.activeIndex.activePage}>{activePage.subtitle}</h2>
          <p key = {'contenthp' + this.props.activeIndex.activeSection + this.props.activeIndex.activePage}>
            {formatedParagraph(activePage.body)}
          </p>
          {this.renderNextPreviousButtons(this.props.activeIndex.activePage,activeSection.pages.length,activeSection)}
          <BubblePagercontainer>
            <BubblePager/>
          </BubblePagercontainer>
        </Content>
        <Picture key = {'picture' + this.props.activeIndex.activeSection + this.props.activeIndex.activePage}>
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
