import { Component, OnInit } from '@angular/core';
import { RoutingServiceService } from '../routing-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers:[RoutingServiceService]
})
export class ContactListComponent implements OnInit {

  constructor(private serviceobj : RoutingServiceService) { }

  contactList :any[]=[];

  ngOnInit(): void {
    this.contactList = this.serviceobj.getcontacts();
  }

}
