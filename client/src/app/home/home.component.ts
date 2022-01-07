import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  propertyFormGroup: FormGroup = new FormGroup({
    propertyName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    propertyDescription: new FormControl("", [Validators.required]),
    propertySize: new FormControl(0, [Validators.required])
  });

  propertyId: number = 100;
  allProperty: Array<Object> = [];
  ADD_PROPERTY: string = 'Add Property';
  Hide_FORM: string = "Hide Form";
  addPropertyBtnCaption: string = this.ADD_PROPERTY;
  propertyFormVisibility: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  propertyFormSubmit() {
    console.log(this.propertyFormGroup.value);
    let tempProp = {
      ...this.propertyFormGroup.value,
      id: ++this.propertyId
    }
    this.allProperty.push(tempProp);
  }

  addpropertyBtnClick() {
    if(this.addPropertyBtnCaption === this.ADD_PROPERTY) {
      this.addPropertyBtnCaption = this.Hide_FORM;
      this.propertyFormVisibility = true;
    }else {
      this.addPropertyBtnCaption = this.ADD_PROPERTY;
      this.propertyFormVisibility = false;
    }
  }

  removeproperty(id: number){
    const newpropertyArr = this.allProperty.filter((property: any) => property.id != id);
    this.allProperty = newpropertyArr;
  }

}
