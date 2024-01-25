import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-libray',
  template: `
    <p>
      shared-libray works!
    </p>
  `,
  styles: [
  ]
})
export class SharedLibrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
