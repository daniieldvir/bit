import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactResolverService } from './services/contact-resolver.service';
import { ContactDetailsComponent } from './Pages/ContactDetails/contact-details.component';
import { ContactEditComponent } from './Pages/ContactEdit/contact-edit.component';
import { ContactPageComponent } from './Pages/ContactPage/contact-page.component';
import { HomePageComponent } from './Pages/HomePage/home-page.component';
import { SignupPageComponent } from './Pages/SignupPage/signup-page.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverService },
    // canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolverService },
      },
      {
        path: 'edit',
        component: ContactEditComponent,
        resolve: { contact: ContactResolverService },
      },
    ],
  },
  {
    path: 'signup',
    component: SignupPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
