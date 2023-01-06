import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.component.html',
  styleUrls: ['./exito.component.css']
})
export class ExitoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['portfolio'])
  }

}
