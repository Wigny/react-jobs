import { Component } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { JobsState } from "../../store/ducks/jobs/types";

class Jobs extends Component<JobsState> {
  render() {
    const { loading, error, data } = this.props;

    if (loading) return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );

    if (error) return (
      <div className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg">
        <p>An error occurred</p>
      </div>
    );

    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Remote</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {
                    data?.countries.map(country =>
                      country.cities.map(city =>
                        city.jobs.map(job => (
                          <tr key={job.id} data-testid={`table-row-${job.id}`}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{job.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.company.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{country.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{city.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${job.remotes.length ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {job.remotes.length ? 'Yes' : 'No'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ jobs }: ApplicationState) => jobs;
const connectToStore = connect(mapStateToProps);

export default connectToStore(Jobs);
