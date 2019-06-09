import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { NewmemberComponent } from './newmember/newmember.component';
import { UpdatememberComponent } from './updatemember/updatemember.component';
import { CtableComponent } from './ctable/ctable.component';
import { CnewComponent } from './cnew/cnew.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    AccountComponent,
    ChangepasswordComponent,
    TeamComponent,
    MemberComponent,
    NewmemberComponent,
    UpdatememberComponent,
    CtableComponent,
    CnewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
      operation.setContext((_) => ({
        headers: setHeaders()
      }));
      //
      return forward(operation);
    });

    const setHeaders = (): HttpHeaders => {

      const headers =  new HttpHeaders();
      const token = sessionStorage.getItem('token');
      const user: any = JSON.parse(sessionStorage.getItem('user'));      

      if (token && user) {                
        return headers.set("Authorization", `${token}&${user.id}`);        
      }

      return headers;
    };    

    apollo.create({
      link: from([authMiddleware, http]),
      cache: new InMemoryCache()
    });
  }

}
