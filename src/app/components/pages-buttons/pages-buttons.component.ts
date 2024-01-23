import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pages-buttons',
  templateUrl: './pages-buttons.component.html',
  styleUrls: ['./pages-buttons.component.scss'],
})
export class PagesButtonsComponent implements OnInit {

  @Input() currPage!:number;
  @Input() next!:string;
  @Input() prev!:string;

  @Output() pageMove = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  nextPage() {
    this.currPage++;
    this.pageMove.emit(this.currPage);
  }


  prevPage() {
    this.currPage--;
    this.pageMove.emit(this.currPage);
  }
}
