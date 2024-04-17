import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../../models/Vacancy';
import { BASE_URL } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class VacancyAPIServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getAllVacanciesById(id: number): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${BASE_URL}/companies/${id}/vacancies`)
  }
    
}

