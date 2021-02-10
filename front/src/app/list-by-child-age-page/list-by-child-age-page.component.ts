import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NutriBbService } from 'src/services/nutri-bb.service';

@Component({
  selector: 'app-list-by-child-age-page',
  templateUrl: './list-by-child-age-page.component.html',
  styleUrls: ['./list-by-child-age-page.component.scss']
})
export class ListByChildAgePageComponent implements OnInit {

  child_age = new FormControl('3');
  food;
  constructor(private router: Router, private nutriBbService: NutriBbService) { }

  ngOnInit(): void {
    this.getfood();
    this.child_age.value;
  }

  getfood(){
    this.nutriBbService.getAllFood().subscribe(result => {
      this.food = result;
      console.log(this.food)
    })
  }
  updateAge(data){
    this.child_age.setValue(data);
  }
  myList(){
    this.router.navigate(['/myList'])
  }
  home(){
    this.router.navigate(['/home'])
  }
 choice(){

 }
}
