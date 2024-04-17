import { Routes } from '@angular/router';
import { CompanyListComponent } from './view/company-list/company-list.component';
import { VacancyListComponent } from './view/vacancy-list/vacancy-list.component';
import { CompanyFormComponentComponent } from './view/company-form-component/company-form-component.component';

export const routes: Routes = [
    {path: "", component: CompanyListComponent},
    {path: "companies/:id/vacancies", component: VacancyListComponent},
    {path: "companies/form", component: CompanyFormComponentComponent},
    {path: "companies/form/:id", component: CompanyFormComponentComponent}
];
