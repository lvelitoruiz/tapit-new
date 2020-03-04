import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressSpinnerModule
} from '@angular/material';


const MaterialComponents = [
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressSpinnerModule
];


@NgModule({
    imports: [ MaterialComponents ],
    exports: [ MaterialComponents ]
})
export class MaterialModule { }
