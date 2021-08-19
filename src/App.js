import { Route, Switch } from 'react-router-dom'
import './App.css';

import { Provider } from './context/States';

import { Homepage } from './component/Homepage';
import { CreateUser, } from './component/CreateUser';
import { EditUser } from './component/EditUser';


fetch('http://localhost:3001/posts/')
 .then(response => response.json())
 .catch(error => console.error('Error:', error))
 .then(response => console.log('Success:', JSON.stringify(response)));  
   
   
function App() {
	return (
		<Provider>
			<div className="CRUD">
				<Switch>
					<Route path="/" component={Homepage} exact />
					<Route path="/add" component={CreateUser} exact />
					<Route path="/edit/:id" component={EditUser} exact />
				</Switch>
			</div>

		</Provider>
	);
}

export default App;
