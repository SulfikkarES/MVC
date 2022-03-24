import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


export const appRoutes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Contacts',component:ContactsComponent},
  {path:'ContactList',component:ContactListComponent},
  {path:'Contact/:ID',component:ContactDetailsComponent},
  {path:'',component:HomeComponent,pathMatch:'full'}

];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})
export class AppRoutingModule { }

//export const approutes : Routes[]=[];
