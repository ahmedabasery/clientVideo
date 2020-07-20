import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
    // here the tag create a copy of this object
    //then assign attributes as thier name
    //as example : it takes the attribute value and the attribute onChange as its valuse
    //Equivelent to
    //<input onChange={input.onChange} value={input.value} />
  };

  onSubmit = (formValues) => {
    //this.props.createStream(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title     "
        />
        <Field
          name="discription"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title ";
  }
  if (!formValues.discription) {
    errors.discription = "You must enter a discription ";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);

export default formWrapped;
