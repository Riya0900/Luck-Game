import React from "react"; 
import Update from "./Update";

class ClassLog extends React.Component {
  render() {
      return (
        <>
          <button onClick={this.props.incrcount} className="btn">
            {this.props.count} Points
          </button>
        </>
      );
  }
}

export default Update(ClassLog);