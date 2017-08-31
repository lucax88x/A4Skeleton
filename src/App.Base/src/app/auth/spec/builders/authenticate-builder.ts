import { Authenticate } from '../../models/user';

export class AuthenticateBuilder {

    private _username: string;
    private _password: string;

    public withUsername(username: string): AuthenticateBuilder {
        this._username = username;
        return this;
    }

    public withPassword(password: string): AuthenticateBuilder {
        this._password = password;
        return this;
    }

    build(): Authenticate {

        return {
            username: this._username,
            password: this._password
        };
    }
}