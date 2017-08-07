import { User } from '../../models/user';
import { UserBuilder } from '../builders/user-builder';

export class UserFactory {

    static single(): User {
        return new UserBuilder().withId("1").withName("name1").build();
    }

    static multiple(count: number): User[] {
        let users = [];
        for (let i = 0; i < count; i++) {
            users.push(new UserBuilder().withId(i.toString()).withName(`name${i.toString()}`).build());
        }
        return users;
    }
}