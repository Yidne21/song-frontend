export interface DefaultLayoutState {
    isLogging: boolean;
    loggedIn: boolean;
    hasErrors: boolean;
    errors?: string;
    user?: User;
}

export interface User {
    id: string;
    name: string;
    email: string;
}