import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

 private items: string[] = []

  constructor(private _lsita: ListService){
    this.items = this._lsita.get();
  }
  getItems(){
    return this.items;
  }

}
