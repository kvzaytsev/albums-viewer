import {
  Component,
  EventEmitter,
  Output,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { ISubscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-album-filters',
  templateUrl: './album-filters.component.html',
  styleUrls: ['./album-filters.component.scss']
})
export class AlbumFiltersComponent implements AfterViewInit, OnDestroy {

  @Output() sortChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<string>();

  @ViewChild('filterInput')
  inputField: ElementRef;

  subscription: ISubscription;

  constructor() { }

  ngAfterViewInit() {
    this.subscription = fromEvent(this.inputField.nativeElement, 'input')
      .debounceTime(200)
      .subscribe((evt) => {
        this.filterChange.emit(evt['target']['value']);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSortChange(evt) {
    this.sortChange.emit(evt.target.value);
  }
}
