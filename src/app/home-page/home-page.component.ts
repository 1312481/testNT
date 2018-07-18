import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  rows = [
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Jonathan Smith',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },
    {
      name: {
        userName: 'Amanda McLauren',
        off: 'IT Officer'
      },
      comms: {
        email: 'john@organisation.com',
        phone: '+84 909090909'
      },
      country: 'UK',
      role: 'User Administrator',
      status: 'User Active'
    },
    {
      name: { userName: 'Jenifer Lopez', off: 'IT Officer' },
      comms: { email: 'john@organisation.com', phone: '+84 909090909' },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    },

    {
      name: { userName: 'Jude Law', off: 'IT Officer' },
      comms: { email: 'john@organisation.com', phone: '+84 909090909' },
      country: 'UK',
      role: 'User',
      status: 'Invited'
    },
    {
      name: { userName: 'Jude Law', off: 'IT Officer' },
      comms: { email: 'john@organisation.com', phone: '+84 909090909' },
      country: 'UK',
      role: 'contact',
      status: 'none-user contact active'
    }
  ]
  columns = [
    { name: 'NAME' },
    { name: 'COMMS' },
    { name: 'COUNTRY' },
    { name: 'ROLE' },
    { name: 'STATUS' }
  ];
  constructor() { }

  ngOnInit() {

  }

}
