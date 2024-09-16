export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
  
export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
    nameFilter: string;
    usernameFilter: string;
    emailFilter: string;
    phoneFilter: string;
}
