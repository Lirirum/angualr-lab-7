import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildComponent  } from './child-component.component';

describe('AppChildComponent', () => {
  let component: AppChildComponent ;
  let fixture: ComponentFixture<AppChildComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
