import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parent } from 'src/class/Parent';
import { NutriBbService } from 'src/services/nutri-bb.service';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.scss']
})
export class LogPageComponent implements OnInit {

    firstname = new FormControl('',Validators.required);
    email = new FormControl('',Validators.required);
    parents;
    parent;


  constructor(private router: Router, private nutriBbService: NutriBbService) { }

  ngOnInit(): void {
    this.getAllParents();
    this.getParentById();
  }

  getAllParents(){
    this.nutriBbService.getAllParent().subscribe( result => {
      this.parents = result;
      console.log(this.parents)});
  }

  getParentById(){
    this.nutriBbService.getParentById("1").subscribe( result => this.parent = result);
  }

  listByAge(){
    console.log(this.firstname.value,this.email.value)
    this.router.navigate(['/listByAge'])
  }
}
