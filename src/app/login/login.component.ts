import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { MessageService } from 'primeng/api';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;  
  jsonData: any;

  constructor(private fb : FormBuilder, private router : Router, private messageService: MessageService) { }

  ngOnInit(): void {
    
    this.loginFormGroup = this.fb.group({
      username : this.fb.control(null,[Validators.required ,Validators.minLength(4)]),
      password : this.fb.control(null,[Validators.required ,Validators.minLength(6)])
    })
  }
  @ViewChild('usernameInput', { static: true }) usernameInput!: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
  

  login() {
    if (this.usernameInput.nativeElement.value === 'Narsa' && this.passwordInput.nativeElement.value === 'Narsa') {
      this.router.navigateByUrl("/layout");
    } else {
      this.messageService.add({severity:'error', summary:'Erreur', detail:'Nom d\'utilisateur ou mot de passe est incorrect.'});
    }    
  }
}
