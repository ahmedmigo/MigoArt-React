import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {activatePage,nextPage,previousPage} from '../actions/index';
import styled from 'styled-components'

const Info = styled.div`
    display: grid;
    grid-area: details;
    padding: 0% 5% 5% 5%;
    grid-template-columns: 50%;
    height: calc(100vh - 109px);
    grid-template-areas:
    "content picture";
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 70px 50px auto 30px;
  grid-template-areas:
                      "mainHeader"
                      "subTitle"
                      "body"
                      "nextPageNav";
  background: #272727;
  grid-area: content;
  padding: 5%;
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
    font-family: 'Yeseva One', cursive;
    font-size: 30px;
  }
  > p {
    grid-area:body;
    align-self:start;
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
  > img {
    width:100%;
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
`

const Seprator = styled.div`
  background-color:#B80F0A;
  height: ${props => props.thin ? '1px' : '2px'};
  width:30%;
  border-radius: 3px;
`

class PageDetails extends Component {

  nextButton(){
    return (
      <ButtonNav onClick={()=>{this.props.nextPage(this.props.activeSection); }}>
        next page  <img src = '/imgs/arrowDown.png' />
      </ButtonNav>
    );
  }
  previousButton(){
    return (
    <ButtonNav onClick={()=>{this.props.previousPage(this.props.activeSection); }}>
      previous page  <img src = '/imgs/arrowUp.png' />
    </ButtonNav>);
  }

  renderNextPreviousButtons() {
    var activePageNumber = this.props.activeSection.activePage;
    if (this.props.activeSection.pages.length > 1 && activePageNumber == 0) {
      return (
        <ButtonDiv>
         {this.nextButton()}
       </ButtonDiv>
      );
    }
    else if (this.props.activeSection.pages.length <= 1){
      return (
        <ButtonDiv>
        </ButtonDiv>
      );

    }
    else if (activePageNumber == this.props.activeSection.pages.length -1) {
      return (
        <ButtonDiv>
          {this.previousButton()}
        </ButtonDiv>
    );
    } else {
      return (
        <ButtonDiv>
          {this.previousButton()}
          {this.nextButton()}
        </ButtonDiv>
      );
    }
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("componenetUpdate" ,nextProps,nextState);
  //   return true
  // }
  render() {
    if (!this.props.activeSection) {
      return <h4>NoPage found</h4>
    }
    this.props.activatePage(this.props.activeSection,0);
    return (
      <Info>
        <Content>
          <h1>{this.props.activeSection.title}<Seprator /></h1>

          <h2>{this.props.activeSection.pages[this.props.activeSection.activePage].subtitle}</h2>
          <p>{this.props.activeSection.pages[this.props.activeSection.activePage].body}</p>
          {this.renderNextPreviousButtons()}
        </Content>
        <Picture>
          <img src = {this.props.activeSection.pages[this.props.activeSection.activePage].coverPic} />
        </Picture>
      </Info>
    );
  }
}


function mapStateToProps(state) {
  return {
    activeSection: state.activeSection,
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
