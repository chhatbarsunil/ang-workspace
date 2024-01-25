import { NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';
import { ToolComponentComponent } from './tool-component/tool-component.component';



@NgModule({
  declarations: [
    ToolsComponent,
    ToolComponentComponent
  ],
  imports: [
  ],
  exports: [
    ToolsComponent
  ]
})
export class ToolsModule { }
