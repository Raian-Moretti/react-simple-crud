import './App.css';

import { UserList } from './component/UserList';
import { Provider } from './context/States';

function App() {
  return (
    <Provider>
    	<div className="CRUD">
			<UserList />
		</div>

    </Provider>
  );
}

export default App;
