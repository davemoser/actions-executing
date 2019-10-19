import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { SecondComponent } from './second.component';

@NgModule({
    declarations: [SecondComponent],
    imports: [
        CommonModule,
        NgxsModule.forFeature([]),
        RouterModule.forChild([{ path: '', component: SecondComponent }])
    ]
})
export class SecondModule { }
