import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "vikas",
    };
  }
  componentDidMount() {
    console.log("mounted!!");
    this.setState((prevState) => {
      console.log("prev state", prevState);
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      console.log("prev state", prevState);
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.counter < 0) {
  //       this.setState({ counter: 0 });
  //     }
  //     console.log("component updated");
  //     //this.setState({ counter: 5 });
  //   }
  //useEffect(()=>{},[counter])
  componentWillUnmount() {
    console.log("unmount!!");
  }
  //useEFfect(()=>{return ()=>{}}};
  render() {
    console.log("render");
    const { counter, name } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            // this.setState({ counter: counter - 1 });
            this.forceUpdate();
          }}
        >
          Decrease
        </button>
        <p>Counter is </p>
        {counter}
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Counter;
