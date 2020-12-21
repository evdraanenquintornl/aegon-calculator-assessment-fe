import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalculationDto } from '../models/CalculationDto';

@Injectable({
  providedIn: 'root'
})
export class SimpleCalculatorService implements OnInit {
  private previousCalculationsList: CalculationDto[] = new Array<CalculationDto>();
  private previousCalculations = new BehaviorSubject(this.previousCalculationsList);

  private apiRoute: string = environment.calculationUrl + '/api/calculations';

  constructor(private httpClient: HttpClient, private toastrService: ToastrService) {  }

  ngOnInit(): void {
    this.httpClient.get(this.apiRoute).subscribe(calculations => {});
  }


  calculate(value: string) {
    this.httpClient.post<CalculationDto>(this.apiRoute, value, {}).subscribe((value) => {

      this.previousCalculationsList.push(value);
      this.previousCalculations.next(this.previousCalculationsList);

    }, (error: HttpErrorResponse) => {
      this.toastrService.error('An error occurred', error.statusText);
    });

  }

  getAllCalculations() {
    return this.previousCalculations;
  }

}
