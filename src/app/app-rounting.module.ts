import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverseShoesComponent } from './converse-shoes/converse-shoes.component';
import { OmniFoodComponent } from './omni-food/omni-food.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/registration-form', pathMatch: 'full' },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'converse-shoes', component: ConverseShoesComponent },
  { path: 'omni-food', component: OmniFoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
