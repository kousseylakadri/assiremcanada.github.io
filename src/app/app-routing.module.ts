import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './componets/a-propos/a-propos.component';
import { AccueilComponent } from './componets/accueil/accueil.component';
import { BlogComponent } from './componets/blog/blog.component';
import { GalerieComponent } from './componets/galerie/galerie.component';
import { NosActionComponent } from './componets/nos-action/nos-action.component';
import { NousContacterComponent } from './componets/nous-contacter/nous-contacter.component';


const routes: Routes = [
    {
        path: '', component:AccueilComponent
    },
    {
        path: 'a-propos', component:AProposComponent
    },
    {
        path: 'blog', component:BlogComponent
    },
    {
        path: 'galerie', component:GalerieComponent
    },
    {
        path: 'nous-contacter', component:NousContacterComponent
    },
    {
        path: 'nos-action', component:NosActionComponent
    }

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}

