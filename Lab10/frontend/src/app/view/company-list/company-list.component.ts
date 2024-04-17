import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompanyAPIServiceService } from '../../data/network/company/company-apiservice.service';
import { Company } from '../../data/models/Company';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  companies: Company[] = []

  constructor(private service: CompanyAPIServiceService){}

  ngOnInit(){
    this.loadData()
  }

  loadData(){
    this.service.getAllCompanies().subscribe((data)=>this.companies = data)
  }

  deleteCompany(id: number){
    this.service.delete(id).subscribe(()=>{
      this.loadData()
    })
  }
}
