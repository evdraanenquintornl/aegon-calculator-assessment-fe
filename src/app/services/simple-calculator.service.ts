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

  calculate(sumString: string): void {
    const stringArray = sumString.split(' ');
    let result = null;

    this.httpClient.post<CalculationDto>(this.apiRoute, stringArray).subscribe(value => {

      this.previousCalculationsList.push(value);
      this.previousCalculations.next(this.previousCalculationsList);
      result = value.result;
      return result;
    }, (error: HttpErrorResponse) => {

      let errorText = 'An error occurred';

      if (error.status === 411) {
        errorText = 'Currently only able to calculate simple sums.';
      } else if (error.status === 400) {
        errorText = 'Unable to parse sum.';
      }

      this.toastrService.error(errorText, error.status.toString());
    });
  }

  getAllCalculations(): BehaviorSubject<CalculationDto[]> {
    return this.previousCalculations;
  }

}
