import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.modal';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tour = {
    "startLocation": {
      "description": "Miami, USA",
      "address": "301 Biscayne Blvd, Miami, FL 33132, USA"
    },
    "ratingsAverage": 4.8,
    "ratingsQuantity": 6,
    "images": ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
    "startDates": [
      "2021-06-19T09:00:00.000Z",
    ],
    "_id": "",
    "name": "The Sea Explorer",
    "duration": 7,
    "maxGroupSize": 15,
    "difficulty": "medium",
    "guides": ["", ""],
    "price": 497,
    "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
    "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "imageCover": "tour-2-cover.jpg",
    "locations": [
    ]
  }
  user:User
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }

}
