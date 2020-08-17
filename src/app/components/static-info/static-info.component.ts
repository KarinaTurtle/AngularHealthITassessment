import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from '../../communicator.service';

@Component({
  selector: 'app-static-info',
  templateUrl: './static-info.component.html',
  styleUrls: ['./static-info.component.css'],
})
export class StaticInfoComponent implements OnInit {
  constructor(private _communicator: CommunicatorService) {}
  selectedState: any;

  ngOnInit(): void {
    this._communicator.getState().subscribe((v) => {
      this.selectedState = v;
      // console.log(v);
    });
  }
}
