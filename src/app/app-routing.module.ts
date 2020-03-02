import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponentComponent } from "./Main-component/Main-component.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponentComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./Main-component/Main-component.module").then(
            m => m.MainComponentModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
