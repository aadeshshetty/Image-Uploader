import { Directive,EventEmitter,HostListener,Output } from '@angular/core';

@Directive({
  selector: '[appUploadImage]'
})
export class UploadImageDirective {

  constructor() { }
  @Output() onFileDrop = new EventEmitter<any>();

  @HostListener('dragover',['$event']) public onDragOver(evt :any) : any {
    evt.preventDefault();
    evt.stopPropagation();
    evt.dataTransfer.dropEffect = 'copy';
    evt.dataTransfer.effectAllowed = "all"; 
  }

  @HostListener('dragleave',['$event']) public onDragLeave(evt :any) : any {
    evt.preventDefault();
    evt.stopPropagation();
    evt.dataTransfer.dropEffect = 'copy';
  }

  @HostListener('drop',['$event']) public onDrop(evt :any) : any {
    evt.preventDefault();
    evt.stopPropagation();
    const files = [...evt.dataTransfer.files];
    if (files && files.length > 0) {
      console.log(files)
      this.onFileDrop.emit(files);
    }
  }
}
