export interface AuthState {
  readonly loading: boolean;
  readonly loggedIn: boolean;
  readonly user: {};
}

export interface AuthModule {
  auth: AuthState;
}
