import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjekcijeComponent } from './projekcije/projekcije.component';
import { ProfilComponent } from './profil/profil.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projekcije', component: ProjekcijeComponent },
    { path: 'profil', component: ProfilComponent },
    { path: '**', redirectTo: '' }
];
