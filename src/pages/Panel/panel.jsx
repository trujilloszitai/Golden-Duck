import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "./panel.scss";
import GoldenDuckLogo from "../../assets/img/logo512.png";
import profilePhoto from "./assets/img/defaultProfilePhoto.jpg";

import PanelOption from "./components/mainPanelSelect";
import darkMode from "../../utils/darkMode";

export default class Register extends Component {
  state = {
    panelNumber: 1,
  };

  changePanel = (event) => {
    this.setState({
      panelNumber: parseInt(event.currentTarget.value),
    });

    let listActiveButton = document.getElementsByClassName("active");
    for (let i = 0; i < listActiveButton.length; i++) {
      listActiveButton[i].classList.remove("active");
    }

    event.currentTarget.classList.add("active");
  };

  noContextMenu = () => {
    $(document).ready(function () {
      $("#Panel").on("contextmenu", function (e) {
        return false;
      });
    });
  };

  render() {
    this.noContextMenu();
    let values = this.state;

    return (
      <section id="Panel">
        {/* <!---------------------------------- AsideBar ----------------------------------> */}

        <aside>
          <div className="top">
            <div className="logo">
              <img src={GoldenDuckLogo} alt='GDlogo'/>
              <h2>
                <span className="primary">Golden Duck</span>
              </h2>
            </div>
            <div className="close">
              <span className="material-icons-outlined">close</span>
            </div>
          </div>
          <div className="sidebar">
            <button value={1} className="active" onClick={this.changePanel}>
              <span className="material-icons-outlined">wallet</span>
              <h3>Billetera</h3>
            </button>
            <button value={2} onClick={this.changePanel}>
              <span className="material-icons-outlined">savings</span>
              <h3>Plazo Fijo</h3>
            </button>
            <button value={3} onClick={this.changePanel}>
              <span className="material-icons-outlined">history</span>
              <h3>Gastos</h3>
            </button>
            <button value={4} onClick={this.changePanel}>
              <span className="material-icons-outlined">payment</span>
              <h3>Pagar Servicio</h3>
            </button>
            <button value={5} onClick={this.changePanel}>
              <span className="material-icons-outlined">volunteer_activism</span>
              <h3>Transferir</h3>
            </button>
            <button value={6} onClick={this.changePanel}>
              <span className="material-icons-outlined">trending_up</span>
              <h3>Invetir</h3>
            </button>
            <button value={7} onClick={this.changePanel}>
              <span className="material-icons-outlined">attach_money</span>
              <h3>Prestamo</h3>
            </button>
            <button value={8} onClick={this.changePanel}>
              <span className="material-icons-outlined">help</span>
              <h3>Soporte</h3>
              <span className="notf-count">1</span>
            </button>
            <button value={9} onClick={this.changePanel}>
              <span className="material-icons-outlined">settings</span>
              <h3>Configuración</h3>
            </button>
            <Link to="/">
              <span className="material-icons-outlined">logout</span>
              <h3>Salir</h3>
            </Link>
          </div>
        </aside>

        {/* <!---------------------------------- Main ----------------------------------> */}

        <PanelOption values={values} />

        {/* <!---------------------------------- Right Menu ----------------------------------> */}

        <div className="profileTop">
          <button className="menu-btn">
            <span className="material-icons-outlined">menu</span>
          </button>
          <div className="theme-toggle" onClick={(e) => darkMode.switchTheme(e)}>
            <span className="material-icons-outlined" id="lightButton">
              light_mode
            </span>
            <span className="material-icons-outlined" id="darkButton">
              dark_mode
            </span>
          </div>
          <div className="profile">
            <div className="info">
              <p>
                Hola, <b>Eugenio</b>
              </p>
              <small className="text-muted">Usuario</small>
            </div>
            <div className="profie-photo">
              <img className="profile-photo" src={profilePhoto} alt='profile'/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
