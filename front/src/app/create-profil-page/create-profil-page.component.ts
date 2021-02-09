import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-profil-page',
  templateUrl: './create-profil-page.component.html',
  styleUrls: ['./create-profil-page.component.scss']
})
export class CreateProfilPageComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    child_age: [''],
    email: ['']
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
