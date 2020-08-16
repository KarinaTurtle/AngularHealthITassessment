import { Component, OnInit } from '@angular/core';
import { User } from '../../HealthIT.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-select-state',
  templateUrl: './select-state.component.html',
  styleUrls: ['./select-state.component.css'],
})
export class SelectStateComponent implements OnInit {
  users$: User[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService
      .getUsers()
      .subscribe((data) => (this.users$ = data));
  }
}
