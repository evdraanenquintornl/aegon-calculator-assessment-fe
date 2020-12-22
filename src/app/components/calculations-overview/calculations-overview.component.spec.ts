import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsOverviewComponent } from './calculations-overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('CalculationsOverviewComponent', () => {
  let component: CalculationsOverviewComponent;
  let fixture: ComponentFixture<CalculationsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationsOverviewComponent],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
