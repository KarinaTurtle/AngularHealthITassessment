import { Component, OnInit } from '@angular/core';
import { User } from '../../HealthIT.model';
import { DataService } from '../../data.service';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector: 'app-select-state',
  templateUrl: './select-state.component.html',
  styleUrls: ['./select-state.component.css'],
})
export class SelectStateComponent implements OnInit {
  users$: User[];

  constructor(
    private dataService: DataService,
    private _communicator: CommunicatorService
  ) {}

  ngOnInit() {
    return this.dataService
      .getUsers()
      .subscribe((data) => (this.users$ = data));
  }
  onClick(event) {
    this._communicator.updateState(event);
  }
}
