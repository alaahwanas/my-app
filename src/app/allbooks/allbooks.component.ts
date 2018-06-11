import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  itemList: AngularFireList<any>
  itemArray = []
  id: any

  data = {
    bookname: '',
    stage: '',
    class: '',
    donator: '',
    phone: '',
    email: '',
    province: '',
    notes: ''
  }

  constructor(public db: AngularFireDatabase, public router: Router, public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = params

    });

    this.itemList = db.list('books')
    this.itemList.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          let y = action.payload.toJSON()
          y["$key"] = action.key
          if (action.key == this.id['id']) {

          }

          this.itemArray.push(y as ListItemClass)
          console.log(this.itemArray[0])

          this.data.bookname = this.itemArray[0]['bookname']
          this.data.stage = this.itemArray[0]['stage']
          this.data.class = this.itemArray[0]['class']
          this.data.donator = this.itemArray[0]['donator']
          this.data.phone = this.itemArray[0]['phone']
          this.data.email = this.itemArray[0]['email']
          this.data.province = this.itemArray[0]['province']
          this.data.notes = this.itemArray[0]['notes']


        })

      })

    console.log(this.itemArray)



  }

  ngOnInit() {
    console.log(this.id['id'])
    console.log(this.data)

  }

  editform($key) {
    for (let value of this.itemArray) {
      if (value['$key'] == $key) {
        console.log(value['$key'])
        this.data.bookname = value['bookname'];
        this.data.stage = value['stage'];
        this.data.class = value['class'];
        this.data.donator = value['donator'];
        this.data.phone = value['phone'];
        this.data.email = value['email'];
        this.data.province = value['province'];
        this.data.notes = value['notes'];

      }

    }
  }

  onEdit($key) {
    this.data.bookname
    this.data.stage
    this.data.class
    this.data.donator
    this.data.phone
    this.data.email
    this.data.province
    this.data.notes


    this.itemList.set($key, {
      bookname: this.data.bookname,
      stage: this.data.stage,
      class: this.data.class,
      donator: this.data.donator,
      phone: this.data.phone,
      email: this.data.email,
      province: this.data.province,
      notes: this.data.notes

    })

    this.itemArray = []
  }


  onDelete($key) {
    this.itemList.remove($key);
    this.itemArray = []
  }




  moreInfo($key) {

    console.log($key)
    for (let value of this.itemArray) {
      if (value['$key'] == $key) {
        console.log(value['$key'])
        this.data.bookname = value['bookname'];
        this.data.stage = value['stage'];
        this.data.class = value['class'];
        this.data.donator = value['donator'];
        this.data.phone = value['phone'];
        this.data.email = value['email'];
        this.data.province = value['province'];
        this.data.notes = value['notes'];


      }

    }

  }

}
export class ListItemClass {
  $key : string;
  bookname : string;
  stage : string;
  class : string;
  donator : string;
  phone : string;
  email : string;
  province: string;
  notes: string;

}
