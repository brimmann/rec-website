import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() viewChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onViewChanged(currentView: string) {
    this.viewChanged.emit(currentView);
  }
}
