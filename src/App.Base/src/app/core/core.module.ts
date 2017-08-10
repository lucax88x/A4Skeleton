import { NgModule } from '@angular/core';

import { LockerDirective } from './directives/locker.directive';
import { ValuesPipe } from './pipes/values.pipe';
import { LockerService } from './services/locker.service';

@NgModule({
    declarations: [
        LockerDirective,
        ValuesPipe
    ],
    imports: [
    ],
    providers: [
        LockerService
    ],
    exports: [
        LockerDirective,
        ValuesPipe
    ]
})
export class CoreModule { }