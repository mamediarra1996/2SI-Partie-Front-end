import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService ) {
    this.contactService.getContact().subscribe(data => this.contacts=data);
   
   }

  ngOnInit(): void {
  }

}
