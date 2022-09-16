//! code count down with class
import React, { useState, useEffect } from "react";

class CountDown extends React.Component {
  // khởi tạo state
  state = {
    count: 10,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimeUp();
      }
    }
  }
  //   render chạy đầu tiên
  render() {
    return <div>{this.state.count} class</div>;
  }
}
//! code count down with Hook
const HookCountDown = (props) => {
  // khởi tạo use State
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimeUp();
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    // mỗi 1 lần chạy thì phải clear count đi
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count} hook </div>;
};
export { CountDown, HookCountDown };
