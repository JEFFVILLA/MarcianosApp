import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

    menu: any = [
      {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
          { titulo: 'Dashboard', url: '/dashboard' },
          // Lo podria traer del BackEnd las opciones del sidebar
          { titulo: 'NAVES ETC', url: '/dashboard'},
          { titulo: 'revision', url: '/dashboard'}
        ]
      }
    ];

  constructor() { }
}
