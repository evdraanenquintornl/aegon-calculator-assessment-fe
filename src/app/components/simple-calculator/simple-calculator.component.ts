import { Component, OnInit } from '@angular/core';
import { SimpleCalculatorService } from 'src/app/services/simple-calculator.service';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss']
})
export class SimpleCalculatorComponent implements OnInit {

  sum = '';
  previousCalculations: string[] = new Array();

  constructor(private simpleCalculatorService: SimpleCalculatorService) { }

  ngOnInit(): void {
  }

  add(value: string): void {
    this.sum = this.sum + value;
  }

  reset(): void {
    this.sum = '';
  }

  calculate(): void {
    this.simpleCalculatorService.calculate(this.sum);
    this.reset();
  }

}
