import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxDaterangepickerMd } from '../../../src/daterangepicker/index';
import { AppComponent } from './app.component';
import { CustomRangesComponent } from './custom-ranges/custom-ranges.component';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, CustomRangesComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    NgxDaterangepickerMd.forRoot({
      applyLabel: 'Okay',
      firstDay: 0
    }),
    RouterModule.forRoot(appRoutes),
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
