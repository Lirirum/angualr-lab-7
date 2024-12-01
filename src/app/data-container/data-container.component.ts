import { Component } from '@angular/core';
import {DataService} from '../services/data.service'
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-data-container',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './data-container.component.html',
  styleUrl: './data-container.component.css',
  providers:[DataService],
})
export class DataContainerComponent {
  constructor(private dataService:DataService) {}
  items: string[] = [];
  value: string = "";
  addItem(value: string){       
    this.dataService.addData(value);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
