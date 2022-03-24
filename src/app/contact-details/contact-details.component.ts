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

  Contactobj!: contact;
  id;
  contactList :any[]=[];
  constructor(private serviceobj:RoutingServiceService, private activaterouteobj:ActivatedRoute) { }

  ngOnInit(): void {
    this.contactList=this.serviceobj.getcontacts();
    this.id = this.activaterouteobj.snapshot.paramMap.get("ID");
  }

}
