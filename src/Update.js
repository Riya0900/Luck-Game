import React from "react";

const updatedComp = (OriginalCompo, c) => {
  class NewCompo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      this.incr = this.incr.bind(this);
    }

    incr = () => {
      this.props.setClickNo(this.props.clickno+1);
      this.props.setSum(this.props.sum + this.props.cnt);
      this.setState((prevState) => {
        return { counter: prevState.counter + this.props.cnt };
      })
    };

    render() {
      return (
        <OriginalCompo
          incrcount={this.incr}
          count={this.state.counter}
          {...this.props}
        />
      );
    }
  }

  return NewCompo;
};

export default updatedComp;
