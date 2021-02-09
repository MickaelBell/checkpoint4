import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByChildAgePageComponent } from './list-by-child-age-page.component';

describe('ListByChildAgePageComponent', () => {
  let component: ListByChildAgePageComponent;
  let fixture: ComponentFixture<ListByChildAgePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListByChildAgePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByChildAgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
