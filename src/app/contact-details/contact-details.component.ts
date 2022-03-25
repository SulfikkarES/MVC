import { Component, OnInit } from '@angular/core';
import { contact } from '../routing-service.service';
import { RoutingServiceService } from '../routing-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  ID!: string | null;
  Contactobj: contact | undefined;

  contactList :any[]=[];
  constructor(private serviceobj:RoutingServiceService, private activaterouteobj:ActivatedRoute) { }

  ngOnInit(): void {
    this.contactList=this.serviceobj.getcontacts();
    this.ID = this.activaterouteobj.snapshot.paramMap.get("ID");
    this.Contactobj=this.contactList.find(c=>c.ID==this.ID);
  }

}
