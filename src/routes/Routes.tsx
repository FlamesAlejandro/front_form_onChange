import { BrowserRouter as Router } from "react-router-dom";
import { useAppSelector } from "../ts/redux/store/store";
import RoutesPrivate from "./RoutesPrivate";
import RoutesPublic from "./RoutesPublic";

const Routes = () => {
	const { token } = useAppSelector((store) => store.global);
	return <Router>{!!!token ? <RoutesPublic /> : <RoutesPrivate />}</Router>;
};

export default Routes;
