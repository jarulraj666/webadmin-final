import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { ArrayType } from "@angular/compiler";

@Component({
  selector: "app-findings",
  templateUrl: "./findings.component.html",
  styleUrls: ["./findings.component.scss"]
})
export class FindingsComponent implements OnInit {
  @Input() findingsDataToShow: any[] = null;

  @Output() changeFindingData = new EventEmitter<any>();

  allFindingData: any[];

  constructor() {}

  ngOnInit() {}

  clickFindingData(data) {
    console.log("click event triggered" + data);
    this.changeFindingData.emit(data);
  }

  clickFetchAllData(data) {
    console.log(this.findingsDataToShow);
    this.findingsDataToShow.forEach(element => {
      this.allFindingData.push(element);
    });
    this.changeFindingData.emit(this.allFindingData);
  }
}
