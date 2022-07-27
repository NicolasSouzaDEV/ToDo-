import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskShareService {

  taskShareEvent = new EventEmitter<{}[]>;

  constructor() { }
}
