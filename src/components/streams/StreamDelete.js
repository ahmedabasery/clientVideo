import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { FetchStream, DeleteStream } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PopUpMessage from "../PopUpMessage";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.FetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.DeleteStream(this.props.match.params.id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal onDismiss={() => history.push("/")}>
        <PopUpMessage
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
        ></PopUpMessage>
      </Modal>
    );
  }
}

const mapStateToProps = ({ streams }, OwnProps) => {
  return {
    stream: streams[OwnProps.match.params.id],
  };
};

export default connect(mapStateToProps, { FetchStream, DeleteStream })(
  StreamDelete
);
