import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "../component/input/input.component";
import { ListComponent } from '../component/list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shop';
}
