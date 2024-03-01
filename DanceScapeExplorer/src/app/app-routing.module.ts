import { BannerComponent } from './Front/body/banner/banner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateComponent } from './Front/all-template/all-template.component';
import { TrainingsComponent } from './Front/body/trainings/trainings.component';
import { ClassComponent } from './Front/body/class/class.component';
import { ShowsComponent } from './Front/body/shows/shows.component';
import { ShortCodeComponent } from './Front/body/short-code/short-code.component';
import { ContactComponent } from './Front/body/contact/contact.component';
import { AdminAllComponent } from './Back/admin-all/admin-all.component';
import { AdminHomeComponent } from './Back/admin/admin-home/admin-home.component';

const routes: Routes = [
  { path:'DanceScape', component:AllTemplateComponent,
  children:[
    {path:'home', component: BannerComponent},
    {path:'trainings', component: TrainingsComponent},
    {path: 'class', component:ClassComponent},
    {path: 'shows', component: ShowsComponent},
    {path: 'shortcode', component:ShortCodeComponent},
    {path: 'contact', component:ContactComponent}
  ]
},
{path: 'admin', component:AdminAllComponent,
children:[
  {path:'body', component:AdminHomeComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
