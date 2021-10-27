import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import { store } from "./ts/redux/store/store";

function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;
