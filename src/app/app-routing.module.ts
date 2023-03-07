import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {SituationComponent} from "./situation/situation.component";
import {RapprochementComponent} from "./rapprochement/rapprochement.component";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
    {path:"", component : LoginComponent},
    {path:"layout",component : LayoutComponent, children : [
      {path:"acceuil",component : AcceuilComponent},
      {path:"situation",component : SituationComponent},
      {path:"rapprochement",component : RapprochementComponent},
    ]},
];
  
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
  