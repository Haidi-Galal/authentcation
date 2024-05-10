import { AuthentcationService } from './../../shared/services/authentcation.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,
  ReactiveFormsModule,
  RouterModule,
  
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private authentcation :AuthentcationService,private router:Router,private toastr:ToastrService){

  }
  registerForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d).{8,}$/)]),
    password_confirmation:new FormControl('')

  },{validators:[this.confirmPassowrd]}as FormControlOptions);

  handleForm():void
  { 
    if(this.registerForm.valid){
      this.authentcation.signUp(this.registerForm.value.name,this.registerForm.value.email,
        this.registerForm.value.password,this.registerForm.value.password_confirmation
        ).subscribe(
          {
            next:(response)=>{
              console.log(response);
              this.router.navigate(['/signin']);

            }
            ,
            error:(err)=>{
              
               this.toastr.error(err.error.message);
              console.log(err);
            }
          }
        )
    }else{
      console.log(this.registerForm);
    }
    
    
  }
  confirmPassowrd(form:FormGroup){
    if(form.get('password')?.value!=form.get('password_confirmation')?.value){
      form.get('password_confirmation')?.setErrors({
        mismatch:true,
        
  
      })
    }
    if(form.get('password_confirmation')?.value==''){
      form.get('password_confirmation')?.setErrors({
        required:true,
        
  
      })
    }


  

  }

}
