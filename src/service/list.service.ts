import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private items: string[] = [];
  add(item:string){
    if(item!=""){
      this.items.push(item)
      return true;
    }
    return false;

  }

  get(){
    return this.items;
  }

  constructor() {}
}
