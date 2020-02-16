import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalShow: false,
    displayBlock: false
  };

  openModal = () => {
    this.setState({ modalShow: true });
  };

  closeModal = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({
              displayBlock: !prevState.displayBlock
            }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition in={this.state.displayBlock} timeout={300}>
          {state => <p>{state}</p>}
        </Transition>
        {this.state.modalShow ? (
          <Modal show={this.state.modalShow} closed={this.closeModal} />
        ) : null}
        {this.state.modalShow ? <Backdrop show={this.state.modalShow} /> : null}

        <button className="Button" onClick={this.openModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
