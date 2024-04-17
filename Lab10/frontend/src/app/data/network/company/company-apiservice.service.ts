import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../constants';
import { Company } from '../../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyAPIServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCompanies(): Observable<Company[]> {
    let res = this.http.get<Company[]>(`${BASE_URL}/companies/`)
    return res
  }

  getCompanyById(id: number): Observable<Company>{
    return this.http.get<Company>(`${BASE_URL}/companies/${id}`)
  }

  post(company: Company): Observable<any>{
    const payload = {
      
      "name": company.name,
      "description": company.description,
      "city": company.city,
      "address": company.address
    };
    console.log(payload);
    
    return this.http.post(`${BASE_URL}/companies/`, payload)
  }

  put(company: Company){
    const payload = {
      "id": company.id,
      "name": company.name,
      "description": company.description,
      "city": company.city,
      "address": company.address
    };
    return this.http.put(`${BASE_URL}/companies/${company.id}/`, payload)
  }

  delete(id: number){
    return this.http.delete(`${BASE_URL}/companies/${id}`)
  }
}
