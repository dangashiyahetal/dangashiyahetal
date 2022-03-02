import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverseShoesComponent } from './converse-shoes/converse-shoes.component';
import { AppRountingModule } from './app-rounting.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { OmniFoodComponent } from './omni-food/omni-food.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverseShoesComponent,
    RegistrationFormComponent,
    OmniFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
