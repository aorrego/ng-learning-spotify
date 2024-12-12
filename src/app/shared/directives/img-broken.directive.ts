import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {

  @Input() customImg : string = '';
  @HostListener('error') handleError() : void {
    const elNative = this.elHost.nativeElement;
    console.log('imagen no existe: ', elNative);

    if(this.customImg !== '')
      elNative.src = this.customImg;
    else
      elNative.src = '../../../assets/images/image_broken.jpg';
  }

  constructor(private elHost: ElementRef) {
    console.log('elHost: ', elHost);
   }

}
