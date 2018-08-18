import { Directive, OnInit, ElementRef, Renderer, Input } from "@angular/core";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[caHighlight]"
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef, private render: Renderer) {}

  @Input("caHighlight")
  caHighlight: string;

  @Input("caTextColor")
  caTextColor: stirng;

  @Input("caStyles")
  styles: any;

  ngOnInit(): void {
    const backColor = this.caHighlight || "yellow";
    console.log(
      "highlight directive is applied on " +
        this.element.nativeElement +
        ":" +
        backColor
    );
    this.render.setElementStyle(
      this.element.nativeElement,
      "background",
      backColor
    );

    if (this.caTextColor) {
      this.render.setElementStyle(
        this.element.nativeElement,
        "color",
        this.caTextColor
      );
    }
    if (this.styles) {
      console.log(this.styles);
      const obj = JSON.parse(this.styles);
      console.log("obj", obj);
      // tslint:disable-next-line:forin
      for (const key in obj) {
        this.render.setElementStyle(this.element.nativeElement, key, obj[key]);
      }
    }
  }
}
