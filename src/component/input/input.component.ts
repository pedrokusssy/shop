import { Component } from '@angular/core';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  private isAdded: boolean = false;

  addItem(item: any){
    this.isAdded = this._listService.add(item.value);
    if(this.isAdded)item .value= ""
  }

  constructor(private _listService: ListService){}

}
