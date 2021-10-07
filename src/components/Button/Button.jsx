import React from "react";
import s from "./Button.module.css";

export default class Button extends React.Component {
  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

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
