import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { SimpleCalculatorComponent } from '../components/simple-calculator/simple-calculator.component';

import { SimpleCalculatorService } from './simple-calculator.service';

describe('SimpleCalculatorService', () => {
  let service: SimpleCalculatorService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    });
    service = TestBed.inject(SimpleCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
