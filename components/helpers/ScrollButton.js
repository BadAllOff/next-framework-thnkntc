import React from "react";

class ScrollButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
      ShowAtPosition: 666,
      ToggleScrollUp: "",
    };

    this.HandleScroll = this.HandleScroll.bind(this);
  }

  componentDidMount() {
    this.HandleScroll();
    window.addEventListener("scroll", this.HandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.HandleScroll);
  }

  // Понравился некоторый код в
  // https://github.com/dirtyredz/react-scroll-up-button
  // позаимствовал немного :)
  HandleScroll() {
    const { ShowAtPosition, TransitionClassName } = this.props;
    if (window.pageYOffset > ShowAtPosition) {
      this.setState({ ToggleScrollUp: TransitionClassName });
    } else {
      this.setState({ ToggleScrollUp: "invisible" });
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    const { ToggleScrollUp } = this.state;

    return (
      <button
        style={styles.scrollUpBtn}
        onClick={() => {
          this.scrollToTop();
        }}
        className={`btn btn-outline-secondary ${ToggleScrollUp}`}
      >
        UP
      </button>
    );
  }
}

export default ScrollButton;

const styles = {
  scrollUpBtn: {
    position: "fixed",
    bottom: "5rem",
    right: "5rem",
  },
};
