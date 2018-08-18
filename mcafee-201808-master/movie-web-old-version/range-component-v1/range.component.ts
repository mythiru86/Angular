import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ca-range",
  template: `
            <div class='row'  >
              <button class='btn btn-sm btn-primary'
                      (click)='onDown()'
                      [disabled]='value-delta<min'
                      [class.disabled]='value-delta<min'
              >
              <i class="fa fa-arrow-down"></i>
              </button>
              <span class='md-col-4'>{{value}}</span>
              <button class='btn btn-sm btn-primary'
                (click)='onUp()'
                [disabled]='value+delta>max'
                [class.disabled]='value+delta>max'
              >
              <i class="fa fa-arrow-up"></i>
              </button>
            </div>
            `,

  styles: [
    `
      div.row {
        max-width: 200px;
        width: 200px;
        min-width: 200px;
      }
      .disabled{
        background:gray;
      }
    `
  ]
})
export class RangeComponent implements OnInit {

  //property binding (oneway input)
  @Input()
  delta = 10;
  @Input()
  min = 0;
  @Input()
  max = 100;

  // even binding (oneway output)
  @Output()
  rangeChanged = new EventEmitter<any>();



  // Two way binding
  @Input()
  value: number = 20;

  @Output()
  valueChange = new EventEmitter<number>();




  onUp() {
    this.onSizeChange(this.delta);
  }

  onDown() {
    this.onSizeChange(-this.delta);
  }

  private onSizeChange(delta: number) {
    const newValue = this.value + delta;
    if (newValue >= this.min && newValue <= this.max) {
      this.value = newValue;
      let status = 'increased';

      if (delta < 0) {
         status = 'decreased';
      }

      this.rangeChanged.emit({
        status: status,
        newValue: newValue
      });

      this.valueChange.emit(newValue);

    } else {
      this.rangeChanged.emit({
        status: 'no change',
        newValue: newValue
      });
    }
  }

  constructor() {}

  ngOnInit() {}
}
