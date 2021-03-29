import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  salesPersonList: SalesPerson[] = [
    new SalesPerson('maxim', 'stukov', 'max@stukov.com', 150000),
    new SalesPerson('dasha', 'bal', 'dasha@bal.com', 80000),
    new SalesPerson('john', 'pebble', 'john@peb.com', 200000),
    new SalesPerson('alex', 'mensk', 'alex@men.com', 15000),
    new SalesPerson('tim', 'wouve', 'tim@wouv.com', 101000)
  ];

  ngOnInit(): void {
  }

}
