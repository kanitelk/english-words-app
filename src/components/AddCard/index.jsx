import React, { Component } from 'react';
import './style.scss';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
    this.renderForm = this.renderForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  renderForm () {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  submitForm (e) {
    e.preventDefault();
    let card = {
      theme: this.title.value,
      sourceText: this.sourceText.value,
      translation: this.translation.value,
      color: this.color.value,
    }
    this.setState({
      showForm: false
    })
    console.log(card);
    this.props.add(card);
  }

  render() {
    return(
      <>
        {!this.state.showForm && <button className="add-btn" onClick={this.renderForm}>Add card</button>}
        {this.state.showForm && 
          <>
            <form className="addform" onSubmit={this.submitForm}>
              <input type="text" ref={el => this.title = el} placeholder="Title..." />
            <input type="text" ref={el => this.sourceText = el} placeholder="SourceText..." />
              <input type="text" ref={el => this.translation = el} placeholder="Translation..." />
              <select ref={el => this.color = el}>
                <option selected value="">Color</option>
                <option value="yellow">Yellow</option>
                <option value="aqua">Aqua</option>
                <option value="red">Red</option>
                <option value="">Default</option>
              </select>

              <div className="button-area">
                <button className="add-btn" onClick={this.renderForm}>Close form</button>
                <button type="submit" className="add-btn" value="submit">Add!</button>
              </div>
            </form>
          </>
        }
      </>
    )
  }
}

export default AddCard;