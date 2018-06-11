import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {


  data = {
    
    donator: '',
    phone: '',
    email: '',
    province: '',
    notes: ''
  }

  email: string = '';
  password: string = '';
  uid: any;
  itemList: AngularFireList<any>
  itemArray = []
  id: any
  userKey:any

user: Observable<firebase.User>;
  private isLoggedIn: Boolean = false;
  

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver, public afAuth: AngularFireAuth, private router: Router, private fire: AngularFireAuth, public db: AngularFireDatabase) {

    let status = localStorage.getItem('isLoggedIn')
    console.log(status)
    if (status === 'true') {

      this.isLoggedIn = true;

    } else {
      this.isLoggedIn = false;
    }



    this.itemList = db.list('users')
    this.itemList.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          let y = action.payload.toJSON()
          y["$key"] = action.key
          if (action.payload.child('uid').val() == this.id) {
            this.userKey = action.key

            this.itemArray.push(y as ListItemClass)
            this.data.donator = this.itemArray[0]['donator']
            this.data.phone = this.itemArray[0]['phone']
            this.data.email = this.itemArray[0]['email']
            this.data.province = this.itemArray[0]['province']
            this.data.notes = this.itemArray[0]['notes']
          }

        })
      })

  }


  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false
    localStorage.setItem('isLoggedIn', 'false')
    this.router.navigate(['/home0'])
   
  }

  myLogin() {
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(this.email, this.password)
        this.isLoggedIn = true
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('email', this.fire.auth.currentUser.email)
        console.log(this.fire.auth.currentUser)
        this.fire.authState.subscribe(auth => {
          if (auth) {

            localStorage.setItem('uid', auth.uid)

          }
        })

        this.router.navigate(['/home0'])
      }).catch(error => {
        console.error(error)
      })
  }

  mySignup() {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        console.log(this.email, this.password)

      }).catch(error => {
        console.error(error)
      })
  }


  insertUser() {

    this.email = localStorage.getItem('email')
    
    this.uid = localStorage.getItem('uid')
    console.log('uid: ' + this.uid)

    
    this.itemList.push({
      
      donator: this.data.donator,
      phone: this.data.phone,
      email: this.email,
      province: this.data.province,
      notes: this.data.notes,
      uid: this.uid
    })
    this.itemArray = []

  }

  editform(userKey) {
    for (let value of this.itemArray) {
      if (value['userKey'] == userKey) {
        console.log(value['userKey'])
       
        this.data.donator = value['donator'];
        this.data.phone = value['phone'];
        this.data.province = value['province'];

      }

    }
  }

  onEdit() {
   
    this.itemList.set(this.userKey, {
     
      donator: this.data.donator,
      phone: this.data.phone,
      province: this.data.province,
      email: this.email,
      uid: this.uid

    })
    this.router.navigate(['/home0'])

  }

}
export class ListItemClass {
  $key: string;
  donator: string;
  phone: string;
  email: string;
  province: string;
  notes: string;





}
