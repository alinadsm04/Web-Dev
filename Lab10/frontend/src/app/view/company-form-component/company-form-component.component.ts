import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Company } from '../../data/models/Company';
import { CompanyAPIServiceService } from '../../data/network/company/company-apiservice.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-company-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './company-form-component.component.html',
  styleUrl: './company-form-component.component.css'
})
export class CompanyFormComponentComponent {
  id: string | null = null;

  company!: Company

  constructor(private http: CompanyAPIServiceService, private route: ActivatedRoute, private location: Location){

  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loadData(Number(this.id));
    }else{
      this.company = {id: -1, name: "", description: "", address: "", city: ""}
    }
  }


  loadData(id: number){
    this.http.getCompanyById(id).subscribe((data)=>this.company = data)
  }

  onSubmit(): void {
    if (this.id) {
      console.log('Updating existing:', this.company);
      this.http.put(this.company).subscribe((data)=>console.log(data))
    } else {
      console.log('Creating new', this.company);
      this.http.post(this.company).subscribe((data)=>console.log(data))
    }
    this.location.back()
  }
}
