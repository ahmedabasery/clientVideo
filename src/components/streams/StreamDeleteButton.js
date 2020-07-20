import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  activateDeleteStream,
  DeleteStream,
  resetDeleteStream,
} from "../../actions";
import Modal from "../Modal";
import PopUpMessage from "../PopUpMessage";
import history from "../../history";

class StreamDeleteButton extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() =>
            this.props.DeleteStream(this.props.deleteStream.streamId)
          }
          className="ui negative button"
        >
          Delete
        </button>
        <button
          className="ui button"
          onClick={() => this.props.resetDeleteStream()}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  }

  renderMessage() {
    if (!this.props.deleteStream.active) return null;
    return (
      <Modal onDismiss={() => history.push("/")}>
        <PopUpMessage
          title="Delete Stream"
          content="Are you sure you want to delete this stream"
          actions={this.renderActions()}
        ></PopUpMessage>
      </Modal>
    );
  }
  render() {
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.activateDeleteStream(this.props.streamId)}
        >
          Delete
        </button>
        {this.renderMessage()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ deleteStream }) => {
  return { deleteStream };
};

export default connect(mapStateToProps, {
  activateDeleteStream,
  DeleteStream,
  resetDeleteStream,
})(StreamDeleteButton);
