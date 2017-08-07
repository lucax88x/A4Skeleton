import { User } from '../../models/user';

export class UserBuilder {

    private _id: string;
    private _name: string;

    public withId(id: string): UserBuilder {
        this._id = id;
        return this;
    }

    public withName(name: string): UserBuilder {
        this._name = name;
        return this;
    }

    build(): User {

        return {
            id: this._id,
            name: this._name
        };
    }
}