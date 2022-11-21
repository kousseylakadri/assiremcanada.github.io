import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AProposComponent } from './componets/a-propos/a-propos.component';
import { AccueilComponent } from './componets/accueil/accueil.component';
import { BlogComponent } from './componets/blog/blog.component';
import { FooterComponent } from './componets/footer/footer.component';
import { GalerieComponent } from './componets/galerie/galerie.component';
import { HeadComponent } from './componets/head/head.component';
import { NousContacterComponent } from './componets/nous-contacter/nous-contacter.component';
import { NosActionComponent } from './componets/nos-action/nos-action.component';
@NgModule({
  declarations: [
    AppComponent,
    AProposComponent,
    AccueilComponent,
    BlogComponent,
    FooterComponent,
    GalerieComponent,
    HeadComponent,
    NousContacterComponent,
    NosActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
