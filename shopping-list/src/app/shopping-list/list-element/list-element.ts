import { NgClass, NgIf } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { ListEntry } from '../list-entry';
import { Subscription } from 'rxjs';
import { NotificationService } from '../notification.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-element',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-element.html',
  styleUrls: ['./list-element.css']
})
export class ListElement implements OnInit, OnDestroy {
  @Input() list: ListEntry | undefined;
  @Output() fireDelete: EventEmitter<ListEntry> = new EventEmitter();
  selected = false;
  subscription: Subscription | undefined;
  notification = inject(NotificationService);

  ngOnInit(): void {
    this.subscription = this.notification.selectedElement.subscribe(newList => {
      this.selected = newList === this.list;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getFullName(): string {
    return this.list ? this.list.itemName : 'Unnamed Item';  // Default text if list is undefined
  }

  delete(): void {
    if (this.list) {
      this.fireDelete.emit(this.list);  // Emit delete event
    }
  }
}