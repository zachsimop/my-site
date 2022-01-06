 import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { transform } from 'typescript';
import { items } from './menuItems';

@Component({
  selector: 'nav-items',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css',]
})
export class NavItemComponent implements OnInit {

  navItems = items;

  constructor() { }

  ngOnInit() {
  }

}
