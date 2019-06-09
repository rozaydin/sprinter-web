import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { NewmemberComponent } from './newmember/newmember.component';
import { UpdatememberComponent } from './updatemember/updatemember.component';
import { Updatemember2Component } from './updatemember2/updatemember2.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'main', component: MainComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'account', component: AccountComponent },
            { path: 'changePassword', component: ChangepasswordComponent },
            { path: 'team', component: TeamComponent },
            { path: 'members', component: MemberComponent },            
            { path: 'newmember', component: NewmemberComponent },
            { path: 'member/:id', component: UpdatememberComponent },
            { path: 'member2/:id', component: Updatemember2Component },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }