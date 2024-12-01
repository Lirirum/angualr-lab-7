import { Injectable } from '@angular/core';
import {LogService} from './log.service'

@Injectable({
    providedIn: 'root', 
  })
export class DataService{
  
    private data: string[] = [ "Qwerty", "Michael",  "Sam"];
    constructor(private logService: LogService){}

    getData(): string[] {
        this.logService.write(`Операція була успішною. Дані: ${this.data.toString()}`)
        return this.data;
    }
    addData(value: string){        
        this.data.push(value);
        this.logService.write(`Операція  отримання даних. Дані: ${this.data.toString()}`)
    }
}