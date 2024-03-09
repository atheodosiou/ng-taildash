import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlanComponent } from './table-plan.component';

describe('TablePlanComponent', () => {
  let component: TablePlanComponent;
  let fixture: ComponentFixture<TablePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
