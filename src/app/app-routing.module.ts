import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyGalleriesComponent } from './my-galleries/my-galleries.component';
import { CreateNewGalleryComponent } from './create-new-gallery/create-new-gallery.component';
import { AllGalleriesComponent } from './all-galleries/all-galleries.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllGalleriesComponent    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'my-galleries',
    component: MyGalleriesComponent
  },
  {
    path: 'create',
    component: CreateNewGalleryComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }