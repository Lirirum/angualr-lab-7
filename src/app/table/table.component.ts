import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ 
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    CommonModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new MatTableDataSource<any>([]);
  totalItems = 50; // Загальна кількість записів
  pageSize = 5; // Кількість записів на сторінку
  currentPage = 0; // Номер поточної сторінки
  isLoading = false; // Стан завантаження

  
  allData: any[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: Math.floor(Math.random() * 60) + 20,
  }));

  ngOnInit() {
    this.loadPageData();
  }

  loadPageData() {
    this.isLoading = true;
    setTimeout(() => {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      this.dataSource.data = this.allData.slice(start, end);
      this.isLoading = false;
    }, 1000); // Імітація завантаження даних
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadPageData();
  }
}
