import React, { Component } from 'react';
import './style.scss';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.sourceText,
      contentType: false, //0 - sourse text, 1 - translation
      show: true
    }
    this.toggleContent = this.toggleContent.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  toggleContent () { //Переключение перевода
    let content;
    if (!this.state.contentType) content = this.props.translation
    else content = this.props.sourceText;

    this.setState({
      content: content,
      contentType: !this.state.contentType
    })
  }

  deleteCard () {
    this.setState({
      show: false
    })
  }

  render() {
    const { theme, sourceText, translation } = this.props;
    if (this.state.show) return (
      <div className={`Card ${this.props.color}`} onClick={this.toggleContent} onDoubleClick={this.deleteCard}>
        <p><strong>{theme}</strong></p>
        <p>{this.state.content}</p>
      </div>
    ); 
    else return null;
  }
}

export default Card;