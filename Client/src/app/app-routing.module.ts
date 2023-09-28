import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {
    path:'upload-image',
    component:UploadImageComponent,
  },
  {
    path:'image',
    component:ImageComponent,
  },
  {
    path:'',
    component:UploadImageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
