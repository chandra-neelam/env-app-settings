import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app.config';
import { AppService } from './app.service';
import { Employee, EmployeeResult } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public employees: Array<Employee>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  private loadEmployees() {
    this.appService.getEmployees<EmployeeResult>("employees")
      .subscribe(res => {
        if (res) {
          this.employees = res.data;
        }
      });
  }

}
