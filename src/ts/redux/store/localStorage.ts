// convert object to string and store in localStorage
export const saveToSessionStorage = (state: any) => {
    try {
        const serialisedState = JSON.stringify(state);
        sessionStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
export const loadFromSessionStorage = () => {
    try {
        const serialisedState = sessionStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}