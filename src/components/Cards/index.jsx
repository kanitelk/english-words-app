import React, { Component } from 'react';
import Card from '../Card'
import './style.scss';

class Cards extends Component {
  render() {
    const cardsNumber = this.props.data.length; //Нужно для распределения количества карточек в столбцах
    const anotherCardsNumber = Math.ceil((cardsNumber-5)/2);

    return(
      <>
        <div className="Cards-container">
          <div className="Cards-left">
            {this.props.data
              .sort((a, b) => {
                if (a.length > b.length) return -1;
                if (a.length < b.length) return 1;
              })
              .map((elem, index) => <Card key={index} theme={elem.theme} sourceText={elem.sourceText} translation={elem.translation} color={elem.color} />)
              .slice(0,5)}
          </div>
          <div className="Cards-center">
            {this.props.data
              .sort((a, b) => {
                if (a.length > b.length) return -1;
                if (a.length < b.length) return 1;
              })
              .map((elem, index) => <Card key={index} theme={elem.theme} sourceText={elem.sourceText} translation={elem.translation} color={elem.color} />)
              .slice(5, anotherCardsNumber+5)}
          </div>
          <div className="Cards-right">
            {this.props.data
              .sort((a, b) => {
                if (a.length > b.length) return -1;
                if (a.length < b.length) return 1;
              })
              .map((elem, index) => <Card key={index} theme={elem.theme} sourceText={elem.sourceText} translation={elem.translation} color={elem.color} />)
              .slice(5 + anotherCardsNumber)}
          </div>
        </div>
      </>
    )
  }
}

export default Cards;