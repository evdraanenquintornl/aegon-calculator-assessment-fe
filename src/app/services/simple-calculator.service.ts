import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalculationDto } from '../models/CalculationDto';

@Injectable({
  providedIn: 'root'
})
export class SimpleCalculatorService {
  private previousCalculationsList: CalculationDto[] = new Array<CalculationDto>();
  private previousCalculations = new BehaviorSubject(this.previousCalculationsList);

  private apiRoute: string = environment.calculationUrl + '/api/calculations';

  constructor(private httpClient: HttpClient, private toastrService: ToastrService) {
    this.httpClient.get<CalculationDto[]>(this.apiRoute).subscribe(calculations => {
      this.previousCalculationsList = calculations;
      this.previousCalculations.next(this.previousCalculationsList);
    });
  }


  calculate(value: string) {
    const stringArray = value.split(" ");
    let result = null;

    this.httpClient.post<CalculationDto>(this.apiRoute, stringArray).subscribe(value => {

      this.previousCalculationsList.push(value);
      this.previousCalculations.next(this.previousCalculationsList);
      result = value.result;
      return result;
    }, (error: HttpErrorResponse) => {
      this.toastrService.error('An error occurred', error.statusText);
    });
  }

  getAllCalculations() {
    return this.previousCalculations;
  }

}
