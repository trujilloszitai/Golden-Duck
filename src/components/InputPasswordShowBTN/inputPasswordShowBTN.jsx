import React, { Component } from "react";
import $ from 'jquery'

import './inputPasswordShowBTN.scss';

export default class inputPasswordShowBTN extends Component {
  render() {
    const clickInput = (e) => {
      if (e.target.classList.contains('clicked')){
        $(e.target).next('input').get(0).type = 'password';
        e.target.classList.remove('clicked');
      }
      else{
        $(e.target).next('input').get(0).type = 'text'; 
        e.target.classList.add('clicked');
      }
    }
    const estoestunaexcepcionparaellogincaratriste = (e) =>{
      var span = $(e.target).parent().next('span');
      $(span).css('color', 'var(--backColor)');
    }
    const estoestunaexcepcionparaellogincaratriste_perofueradefocus = (e) =>{
      var span = $(e.target).parent().next('span');
      $(span).css('color', '#909497');
    }
    return (
      <div className="passwordContainer">
        <span className="material-icons-outlined" id="showBTN" onClick={(e) => clickInput(e)}/>
        <input type="password" id="passwordShowInput" name={this.props.name} placeholder={this.props.placeholder} autoComplete='off' required={this.props.required} onClick={(e) => {
          estoestunaexcepcionparaellogincaratriste(e);
        }} onBlur={(e) => {
          estoestunaexcepcionparaellogincaratriste_perofueradefocus(e);
        }}
        />
      </div>
    );
  }
}