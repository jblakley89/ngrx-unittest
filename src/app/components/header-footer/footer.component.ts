import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer"><div class="container">
        <div class="row">
        <div class="col centerText">
            &copy;1739 Footer element
            <br/>
            Various links to meaning full content like about, contact, jobs, etc.
        </div>
    </div></div>
  `,
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
}
