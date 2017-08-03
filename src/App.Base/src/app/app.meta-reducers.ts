import { Action, ActionReducer } from '@ngrx/store';

import { environment } from '../environments/environment';
import { State } from './app.state';

// import { storeFreeze } from 'ngrx-store-freeze';

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
    return function (state: State, action: Action): State {

        console.group(`Action: ${action.type}`);

        if (state) console.log(state);
        console.log(action);

        console.groupEnd();

        return reducer(state, action);
    };
}

export const AppMetaReducers: ActionReducer<any, any>[] =
    !environment.production
        ? [logger]
        // ? [storeFreeze, logger]
        : [];