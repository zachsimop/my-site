import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageNavComponent } from './sub-page-nav.component';

describe('SubPageNavComponent', () => {
  let component: SubPageNavComponent;
  let fixture: ComponentFixture<SubPageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
