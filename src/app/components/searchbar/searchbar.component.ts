import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  searchForm : FormGroup;
  link: string;

  createFormGroup() {
    return new FormGroup({
      'searchCategory' : new FormControl('Teams', Validators.required),
      'searchItem' : new FormControl('', Validators.required),
    })
  }

  buildLink(){
    this.link = `/${this.searchForm.value.searchCategory}/${this.searchForm.value.searchItem}`
  }

  onResetForm(){
    this.searchForm.reset();
  }

  ngOnInit(): void {
    this.searchForm = this.createFormGroup();
  }

}
