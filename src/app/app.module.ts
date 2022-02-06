import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './components/ContactFilter/contact-filter.component';
import { ContactPageComponent } from './Pages/ContactPage/contact-page.component';
import { ContactListComponent } from './components/ContacList/contact-list.component';
import { ContactPreviewComponent } from './components/ContactPreview/contact-preview.component';
import { ContactDetailsComponent } from './Pages/ContactDetails/contact-details.component';
import { ContactEditComponent } from './Pages/ContactEdit/contact-edit.component';
import { HomePageComponent } from './Pages/HomePage/home-page.component';
import { SignupPageComponent } from './Pages/SignupPage/signup-page.component';
import { TransferFundComponent } from './components/TransferFund/transfer-fund.component';
import { MovesListComponent } from './components/MovesList/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    HomePageComponent,
    SignupPageComponent,
    TransferFundComponent,
    MovesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
