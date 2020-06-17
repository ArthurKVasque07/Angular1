import { NaveBarComponent } from './component/nave-bar/nave-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/error404/error-404.component';

@NgModule({
    declarations: [
        NaveBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
            }
        ])
    ],
    exports: [ 
        NaveBarComponent
    ]
})

export class CoreModule {

}