import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NutriBbService } from 'src/services/nutri-bb.service';

@Component({
  selector: 'app-my-list-page',
  templateUrl: './my-list-page.component.html',
  styleUrls: ['./my-list-page.component.scss']
})
export class MyListPageComponent implements OnInit {


  listForm = this.fb.group({
    name: ['',Validators.required],
    type: ['',Validators.required],
    minimumAge: ['',Validators.required],
    consumption: ['',Validators.required]
  });

  food;
  today;

  constructor(private router: Router, private fb: FormBuilder, private nutriBbService: NutriBbService) { }

  ngOnInit(): void {
    this.getfood();
  }


  createList(){

    this.nutriBbService.addFood(this.listForm.value).subscribe(() =>this.getfood());
    console.log(this.listForm.value);
  }

  delete(id){
    this.nutriBbService.deleteFood(id).subscribe(() =>this.getfood())
  }

  getfood(){
    this.nutriBbService.getAllFood().subscribe(result => {
      this.food = result;
      console.log(this.food)
    })
  }

  home(){
    this.router.navigate(['/home'])
  }
  listByAge(){
    this.router.navigate(['/listByAge'])
  }
}
