import { Switch, Route } from "react-router-dom";
import DataViewer from "../components/pages/public/dataviewer/DataViewer";
import Login from "../components/pages/public/login/Login";
const RoutesPublic = () => {
	return (
		<Switch>
			<Route exact path="/view/:id">
				<DataViewer />
			</Route>
			<Route exact path="/">
				<Login />
			</Route>

			<Route path="*">
				<Login />
			</Route>
		</Switch>
	);
};
export default RoutesPublic;
