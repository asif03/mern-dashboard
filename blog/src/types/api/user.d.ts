export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  user: IUser;
  token: string;
}
