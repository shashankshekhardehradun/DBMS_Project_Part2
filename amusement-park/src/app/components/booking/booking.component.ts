import { Component } from '@angular/core';
import { Tickets } from 'src/app/_models/tickets';
import { OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  formVisitor!: FormGroup;
  formParking!: FormGroup;
  formShow!: FormGroup;
  formStore!: FormGroup;
  basePrice = 200;
  parkingFixedPrice = 50;
  showFixedPrice = 20;
  onlineDiscount: number = 0.05;
  finalPrice = this.basePrice * (1 - this.onlineDiscount);

  memberDiscount: number = 0.1;
  seniorChildDiscount: number = 0.15;

  ngOnInit() {
    this.formVisitor = new FormGroup({
      visitor: new FormArray([
        new FormGroup({
          fName: new FormControl(''),
          lName: new FormControl(''),
          dob: new FormControl(''),
          member: new FormControl(''),
          price: new FormControl('')
        })
      ])
    });
  
    //call API end point to fetch shows info from the SQL database
    this.formShow = new FormGroup({
      show: new FormArray([
        new FormGroup({
          shows: new FormControl(''),
          showQuantity: new FormControl(''),
          showPrice: new FormControl('')
        })
      ])
    });
    //call API end point to fetch stores info from the SQL database

    this.formStore = new FormGroup({
      stores: new FormArray([
        new FormGroup({
          store: new FormControl(''),
          item: new FormControl(''),
          storeQuantity: new FormControl(''),
          storePrice: new FormControl('')
        })
      ])
    });


  }

  get visitor(): FormArray {
    return this.formVisitor.get('visitor') as FormArray;
  }

  get show(): FormArray {
    return this.formShow.get('show') as FormArray;
  }

  get parking(): FormArray {
    return this.formParking.get('parking') as FormArray;
  }

  get stores(): FormArray {
    return this.formStore.get('stores') as FormArray;
  }

  removeVisitor() {
    this.visitor.removeAt(-1);
  }

  addVisitor() {
    this.visitor.push(
      new FormGroup({
        fName: new FormControl(''),
        lName: new FormControl(''),
        dob: new FormControl(''),
        member: new FormControl(''),
        price: new FormControl('')
      })
    );
  }

  removeParking() {
    this.parking.removeAt(-1);
  }

  addParking() {
    this.formParking = new FormGroup({
      parking: new FormArray([
        new FormGroup({
          inTime: new FormControl(''),
          outTime: new FormControl(''),
          parkingPrice: new FormControl('')
        })
      ])
    });
  }



  removeShow() {
    this.show.removeAt(-1);
  }

  addShow() {
    this.show.push(
      new FormGroup({
        shows: new FormControl(''),
        showQuantity: new FormControl(''),
        showPrice: new FormControl('')
      })
    );
  }

  removeStore() {
    this.stores.removeAt(-1);
  }

  addStore() {
    this.stores.push(
      new FormGroup({
        store: new FormControl(''),
        item: new FormControl(''),
        storeQuantity: new FormControl(''),
        storePrice: new FormControl('')
      })
    );
  }
  //insert API end point to store all booking data into the database

}
