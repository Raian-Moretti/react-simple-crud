import { Route, Switch } from 'react-router-dom'
import './App.css';

import { Provider } from './context/States';

import { Homepage } from './component/Homepage';
import { CreateTitle, } from './component/CreateTitle';
import { EditTitle } from './component/EditTitle';   
   
function App() {
	return (
		<Provider>
			<div>
				<Switch>
					<Route path="/" component={Homepage} exact />
					<Route path="/add" component={CreateTitle} exact />
					<Route path="/edit/:id" component={EditTitle} exact />
				</Switch>
			</div>

		</Provider>
	);
}

export default App;
