import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "settings", component: SettingsComponent, children: [
    { path: "", redirectTo: "profile", pathMatch: "full"}, //on child level, '/'(root) not needed
    { path: "profile", component: SettingsProfileComponent},
    { path: "contact", component: SettingsContactComponent},
    {path: "**", redirectTo: "profile", pathMatch: "full"}
  ]},
  {path: "**", component: PageNotFoundComponent} // wildcard - to match anything
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
