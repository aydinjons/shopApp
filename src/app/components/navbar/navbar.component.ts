import { Component, OnInit } from '@angular/core';
import { PhoneNumberService } from 'src/app/services/phone-number.service';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faFileSignature } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
logo:string = "/assets/images/logo.png"
  number: () => any;
  
  phone = faPhone;
  cartPlus = faCartPlus;
  thumbsUp = faThumbsUp;
  circleDown = faArrowAltCircleDown;
  contact = faFileSignature;
  constructor(private numberService:PhoneNumberService) { }

  ngOnInit() {
    this.number = this.numberService.number;

  }
}
