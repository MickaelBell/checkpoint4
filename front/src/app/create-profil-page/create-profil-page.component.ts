import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NutriBbService } from 'src/services/nutri-bb.service';


@Component({
  selector: 'app-create-profil-page',
  templateUrl: './create-profil-page.component.html',
  styleUrls: ['./create-profil-page.component.scss']
})
export class CreateProfilPageComponent implements OnInit {

  profileForm = this.fb.group({
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    childAge: ['',Validators.required],
    email: ['',Validators.required]
  });


  constructor(private fb: FormBuilder, private nutriBbService: NutriBbService) { }

  ngOnInit(): void {
  }

  createProfilePArents(){

    this.nutriBbService.createProfile(this.profileForm.value).subscribe();
    console.log(this.profileForm.value);
  }

}
