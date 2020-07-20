import React from "react";
import { connect } from "react-redux";
import { FetchStream, EditStream } from "../../actions";
import StreamForm from "./StreamForm";
import StreamDeleteButton from "./StreamDeleteButton";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.FetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.EditStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading .. </div>;
    }
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: this.props.stream.title,
            discription: this.props.stream.discription,
          }}
        />
        <StreamDeleteButton streamId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, ownProps) => {
  return {
    stream: streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { FetchStream, EditStream })(
  StreamEdit
);
