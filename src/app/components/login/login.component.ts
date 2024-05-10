import { AuthentcationService } from './../../shared/services/authentcation.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authentcation: AuthentcationService){

  }
  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d).{8,}$/)]),

  });

  handleForm():void
  { 
    if(this.loginForm.valid){
      this.authentcation.signIn(this.loginForm.value.email,this.loginForm.value.password,
        ).subscribe(
          {
            next:(response)=>{
              console.log(response);
              // this.router.navigate(['/signin']);

            }
            ,
            error:(err)=>{
              
              //  this.toastr.error(err.error.message);
              console.log(err);
            }
          }
        )
    }else{
      this.loginForm.markAllAsTouched();
      console.log(this.loginForm);
    }
    
    
  }
  

}
