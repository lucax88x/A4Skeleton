import { Action, ActionReducer } from '@ngrx/store';

import { environment } from '../environments/environment';

// import { storeFreeze } from 'ngrx-store-freeze';

export function logger(reducer: ActionReducer<{}>): ActionReducer<any, any> {
    return function (state: {}, action: Action) {

        console.groupCollapsed(`Action: ${action.type}`);

        if (state) {
            console.log(state);
        }

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
