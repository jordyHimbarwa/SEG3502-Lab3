import { Component, inject } from '@angular/core';
import { ListEntry } from './list-entry';
import { NotificationService } from './notification.service';
import { NgIf, NgFor } from '@angular/common';
import { ListElement } from './list-element/list-element'
import{FormsModule} from'@angular/forms';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.html',
    styleUrls: ['./shopping-list.css'],
    providers: [NotificationService],
    standalone: true,
    imports: [NgFor, ListElement,FormsModule]
})
export class ShoppingListComponent {
    newItemName: string = '';  // Holds the new item name
    listes: ListEntry[] = [];   // Array to hold the list of items
    currentList: ListEntry | null = null; // Holds the currently selected item
    notificationService: NotificationService = inject(NotificationService);

    // Adds a new item to the list
    addList(): void {
        if (this.newItemName.trim()) {  // Check for non-empty name
            const newList = new ListEntry(this.newItemName);  // Create a new ListEntry
            this.listes.push(newList);  // Add to the list
            this.newItemName = '';  // Clear the input
        }
    }

    // Deletes the specified item from the list
    deleteItem(item: ListEntry): void {
        this.listes = this.listes.filter(list => list !== item); // Remove the item from the list
    }
}