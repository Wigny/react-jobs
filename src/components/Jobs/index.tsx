import { Component } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { JobsState } from "../../store/ducks/jobs/types";

class Jobs extends Component<JobsState> {
  render() {
    const { data } = this.props;

    return (<pre>{JSON.stringify(data, null, 2)}</pre>);
  }
}

const mapStateToProps = ({ jobs }: ApplicationState) => jobs;
const connectToStore = connect(mapStateToProps);

export default connectToStore(Jobs);
