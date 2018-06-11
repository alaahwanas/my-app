import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {


data = {
bookname :'',
stage :'',
class :'',
donator :'',
phone :'',
email :'',
province :'',
notes :''
}


  email: string = '';
  uid:any;

itemList: AngularFireList<any>
  constructor(public db: AngularFireDatabase, public router: Router, private fire: AngularFireAuth) {
    this.itemList = db.list('books')


    let user = localStorage.getItem('email')
    this.email = user

    console.log(user)

    this.uid = localStorage.getItem('uid')
    console.log('uid: ' + this.uid)

   }

  ngOnInit() {
    
  
  }

insertBook(){
   this.itemList.push({
    bookname :this.data.bookname,
    stage :this.data.stage,
    class :this.data.class,
    donator :this.data.donator,
    phone :this.data.phone,
    email :this.email,
    province :this.data.province,
     notes: this.data.notes,
     uid: this.uid
  })
  this.router.navigate(['/allbooks'])
}
}
