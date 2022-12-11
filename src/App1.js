import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './todo/TodoApp';
import EmployeeList from './Employee/EmployeeList';
import client from './client';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload, Hi Foad...
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <TodoApp/>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}

	render() {
		return (
			<EmployeeList employees={this.state.employees}/>
		)
	}
}

export default App;
