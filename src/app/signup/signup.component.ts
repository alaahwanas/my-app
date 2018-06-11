import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  email:string = '';
  password: string = '';
  



  constructor(private fire: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {

  }


  mySignup(){
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      console.log(this.email, this.password)
      this.router.navigate(['home0'])
    }).catch(error=>{
      console.error(error)
      })
    
  }
}
