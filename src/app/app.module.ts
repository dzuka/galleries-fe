import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyGalleriesComponent } from './my-galleries/my-galleries.component';
import { CreateNewGalleryComponent } from './create-new-gallery/create-new-gallery.component';
import { AllGalleriesComponent } from './all-galleries/all-galleries.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    MyGalleriesComponent,
    CreateNewGalleryComponent,
    AllGalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
