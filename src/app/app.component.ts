import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'memoteca';


  submitForm(){
    console.log('Formulario submit');
  }

  cleanForm(event) {
    console.log(event);

  }
}
