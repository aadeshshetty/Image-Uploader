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
  }

  @HostListener('dragleave',['$event']) public onDragLeave(evt :any) : any {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop',['$event']) public onDrop(evt :any) : any {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDrop.emit(files);
    }
  }
}
