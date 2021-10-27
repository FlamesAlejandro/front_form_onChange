

const Save = (key: string, string: string): void => {
    try {
        const serialisedState = JSON.stringify(string);
        localStorage.setItem(key, serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
const Get = (key: string,): any => {
    try {
        const serialisedState = localStorage.getItem(key);
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export const appLocalStorage = {
    Save,
    Get
}