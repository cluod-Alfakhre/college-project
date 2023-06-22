import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminMainComponent } from "./components/admin-main/admin-main.component";
import { AdminProfileComponent } from "./components/admin-profile/admin-profile.component";

const routes:Routes = [
    {
        path:'',
        component:AdminMainComponent,
        children:[
            {
                path:'',
                redirectTo:'profile',
                pathMatch:'full'
            },
            {
                path:'profile',
                component:AdminProfileComponent
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{}