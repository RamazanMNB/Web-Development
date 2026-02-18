import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
  @if (isServerRunning){
  <span>Yes, the server is running</span>
  } @else{
  <span>No ,the server isn't running</span>
  }
  `,
})
export class App {
    isServerRunning = true;
}