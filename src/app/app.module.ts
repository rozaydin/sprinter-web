import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppRoutingModule } from "./routing.module";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
//
import { environment } from '../environments/environment';
import { ApolloLink, from } from 'apollo-link';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    AccountComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {

    const http = httpLink.create({ uri: environment.graphql_url });
    const authMiddleware = new ApolloLink((operation, forward) => {

      // add the authorization to the headers
      // we assume `headers` as a defined instance of HttpHeaders
      operation.setContext(({ headers }) => ({
        headers: new HttpHeaders().set("Authorization", appendAuthHeader())
      }));
      //
      return forward(operation);
    });

    const appendAuthHeader = (): string => {

      const token = sessionStorage.getItem('token');
      const user: any = JSON.parse(sessionStorage.getItem('user'));

      if (token && user) {
        return `${token}&${user.id}`
      }
      else {
        return null;
      }

    };

    apollo.create({
      link: from([authMiddleware, http]),
      cache: new InMemoryCache()
    });
  }

}
