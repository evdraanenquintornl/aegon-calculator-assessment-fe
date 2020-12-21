import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { SimpleCalculatorService } from 'src/app/services/simple-calculator.service';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss']
})
export class SimpleCalculatorComponent implements OnInit {

  sum: string = '';
  previousCalculations: String[] = new Array();

  constructor(private simpleCalculatorService: SimpleCalculatorService) { }

  ngOnInit(): void {
  }

  add(value: string) {
    this.sum = this.sum + value;
  }

  reset() {
    this.sum = '';
  }

  calculate() { 
    this.simpleCalculatorService.calculate(this.sum);
    this.reset();
  }

}
