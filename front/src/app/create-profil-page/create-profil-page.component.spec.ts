import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilPageComponent } from './create-profil-page.component';

describe('CreateProfilPageComponent', () => {
  let component: CreateProfilPageComponent;
  let fixture: ComponentFixture<CreateProfilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfilPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
