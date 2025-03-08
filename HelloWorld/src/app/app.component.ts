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
 nameError = "";
 
  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event : Event): void{
    console.log("Save button is clicked ", $event);
    window.open(this.url, "_blenk");
  }

  onInput($event: Event) {
    console.log("Change Event Occurred!", $event);
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/; 
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    } else {
      this.nameError ="Name is Incorrect!";
      return;
    }
  }

}
