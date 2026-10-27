import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Careers } from './pages/careers/careers';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';
import { GetSigned } from './pages/get-signed/get-signed';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Store } from './pages/store/store';
import { TalentProfile } from './pages/talent-profile/talent-profile';
import { Talents } from './pages/talents/talents';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'talents', component: Talents },
  { path: 'talents/:slug', component: TalentProfile },
  { path: 'store', component: Store },
  { path: 'gallery', component: Gallery },
  { path: 'careers', component: Careers },
  { path: 'contact', component: Contact },
  { path: 'get-signed', component: GetSigned },
  { path: '**', redirectTo: '' },
];