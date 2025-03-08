import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl ="assets/logo.jpg";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }
}
