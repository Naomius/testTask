import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() searchString!: string;
  @Output() onFilterPosts: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCleanInput: EventEmitter<void> = new EventEmitter<void>();

  filterPosts(): void {
    this.onFilterPosts.emit(this.searchString);
  }

  cleanInput(): void {
    this.searchString = '';
    this.onCleanInput.emit();
  }

}
