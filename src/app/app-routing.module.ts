import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { FilmsComponent } from './pages/films/films.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'films', component: FilmsComponent, canActivate: [AuthGuard] },
    { path: 'characters', component: CharactersComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'films', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
