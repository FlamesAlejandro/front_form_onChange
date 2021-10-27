import { Switch, Route } from "react-router-dom";
import LayoutPrivate from "../components/layouts/private/LayoutPrivate";
import DataViewer from "../components/pages/public/dataviewer/DataViewer";
import Home from "../components/pages/private/home/Home";

const RoutesPrivate = () => {
    return (
        <LayoutPrivate>
            <Switch>
                <Route strict path="/home">
                    <Home />{" "}
                </Route>
                <Route exact path="/view/:id">
                    <DataViewer />
                </Route>

                <Route path="*">
                    <Home />{" "}
                </Route>
            </Switch>
        </LayoutPrivate>
    );
};

export default RoutesPrivate;
