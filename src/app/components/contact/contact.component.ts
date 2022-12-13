import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  emailInput = new FormControl('');
  messageInput = new FormControl('');

  submit(){
    this.messageInput.setValue(this.messageInput.value)
    this.emailInput.setValue(this.emailInput.value)
    alert(`From : ${this.emailInput.value} received\nMessage:\n${this.messageInput.value}`);
  }
}
