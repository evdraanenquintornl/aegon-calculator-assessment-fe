import { Component, OnInit } from '@angular/core';
import { CalculationDto } from 'src/app/models/CalculationDto';
import { SimpleCalculatorService } from 'src/app/services/simple-calculator.service';

@Component({
  selector: 'app-calculations-overview',
  templateUrl: './calculations-overview.component.html',
  styleUrls: ['./calculations-overview.component.scss']
})
export class CalculationsOverviewComponent implements OnInit {
  calculations = new Array<CalculationDto>();

  constructor(private simpleCalculatorService: SimpleCalculatorService) { }

  ngOnInit(): void {
    this.simpleCalculatorService.getAllCalculations().subscribe(calculations => this.calculations = calculations);
  }

}
