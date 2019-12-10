import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinnerContainer">
        <i class="fa fa-spinner fa-spin fa-lg fa-3x"></i>
    </div>
  `,
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent {
}
