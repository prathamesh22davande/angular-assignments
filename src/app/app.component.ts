import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'template-driven-form';

  positions = ['Manager', 'Developer', 'Tester'];

  employeeModel = new Employee(
    'Prathamesh',
    'p@test.com',
    '880601070',
    'Manager'
  );
}
