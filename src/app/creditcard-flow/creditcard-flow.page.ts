import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-creditcard-flow',
  templateUrl: './creditcard-flow.page.html',
  styleUrls: ['./creditcard-flow.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CreditCardFlowPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
