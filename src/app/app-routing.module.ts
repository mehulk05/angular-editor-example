import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloaraComponent } from './floara/floara.component';
import { SyncfusionEditorComponent } from './components/syncfusion-editor/syncfusion-editor.component';
import { CkeEditor5Component } from './components/cke-editor5/cke-editor5.component';
import { RichTextEditorComponent1 } from './components/rich-text-editor/rich-text-editor.component';

const routes: Routes = [
  {
    path: '1', component: RichTextEditorComponent1,
  },
  {
    path: '2', component: FloaraComponent,
  },
  {
    path: '3', component: SyncfusionEditorComponent,
  },
  {
    path: '4', component: CkeEditor5Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
