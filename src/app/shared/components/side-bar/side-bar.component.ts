import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = [];

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [{
      name: 'Home',
      icon: 'uil uil-estate',
      router: ['/']
    },
    {
      name: 'Buscar',
      icon: 'uil uil-search',
      router: ['/', 'history']
    }, {
      name: 'Tu biblioteca',
      icon: 'uil uil-chart',
      router: ['/', 'favorites']
    }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      }, {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ];

    this.customOptions = [
      {
        name: 'Mi lista 01',
        router: ['/']
      },
      {
        name: 'Mi lista 02',
        router: ['/']
      }, {
        name: 'Mi lista 03',
        router: ['/']
      }, {
        name: 'Mi lista 04',
        router: ['/']
      },
    ];
  }
}
