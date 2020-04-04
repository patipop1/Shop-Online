import { Component, OnInit } from '@angular/core';
import { UtilService } from './../../util.service';


@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {

  constructor(
    public util: UtilService
  ) { }

  ngOnInit(): void {
  }

}
