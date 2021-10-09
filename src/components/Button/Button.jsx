import React from "react";
import s from "./Button.module.css";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={s.Button}
        type="button"
        onClick={() => this.props.onLoadMore()}
      >
        Load more
      </button>
    );
  }
}
