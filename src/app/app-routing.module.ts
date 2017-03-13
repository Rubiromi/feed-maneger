import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedNewComponent } from './feed-new/feed-new.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '', canActivate: [AuthGuard], children: [
  { path: '', children: [
    { path: '', redirectTo: '/feeds', pathMatch: 'full' },
    { path: 'feeds', component: FeedsComponent },
    { path: 'feeds/:id', component: FeedsComponent },
    { path: 'feeds/:id/new', component: FeedNewComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeedManegerRoutingModule { }