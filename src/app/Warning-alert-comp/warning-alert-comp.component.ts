import { Component } from '@angular/core';
@Component({
  selector: 'warning-component',
  template: ` <p>this is a warning</p>`,
  styles: [
    `
      p {
        background-color: mistyrose;
        border: 1px solid red;
        padding: 5px;
      }
    `,
  ],
})
export class WarningComponent {}
