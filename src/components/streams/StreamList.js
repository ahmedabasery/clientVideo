import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FetchStreams } from "../../actions";
import StreamDeleteButton from "./StreamDeleteButton";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.FetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId)
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui button primary  "
          >
            Edit
          </Link>
          <StreamDeleteButton streamId={stream.id} />
        </div>
      );
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.discription}</div>
          </div>
        </div>
      );
    });
  }
  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        {this.renderCreateButton()}
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId,
    isSignedIn: auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { FetchStreams })(StreamList);
