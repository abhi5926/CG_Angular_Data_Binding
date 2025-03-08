import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl ="assets/logo.jpg";
  url = "https://www.bridgelabz.com";
 userName = "";
 
  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event : Event): void{
    console.log("Save button is clicked ", $event);
    window.open(this.url, "_blenk");
  }
}
