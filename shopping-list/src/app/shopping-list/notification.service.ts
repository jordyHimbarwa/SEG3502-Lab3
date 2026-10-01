import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { ListEntry } from './list-entry';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
 selectedElement=new BehaviorSubject<ListEntry | null>(null);

 public selectionChanged(list:ListEntry):void{
  this.selectedElement.next(list);
 }}