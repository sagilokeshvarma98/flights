import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public builder: FormBuilder, private route: Router) {
  }


  searchForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    departure: new FormControl('', Validators.required),
    return: new FormControl('', Validators.required),
  })

  cities: any[] = ['HYDERABAD', 'CHENNAI', 'BANGLURU', 'MUMBAI', 'PUNE', 'GOA', 'KASOL', 'COORG', 'KERALA'];
  myControl: FormControl = new FormControl();
  fromOptions!: Observable<string[]>;
  toOptions!: Observable<string[]>;

  ngOnInit() {
    this.fromOptions = this.searchForm.controls.from.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value)),
    );
    this.toOptions = this.searchForm.controls.to.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value)),
    );
  }

  // Function to return array for auto complete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchForFlights() {
    if (this.searchForm.status === 'VALID') {
      let { from, to } = this.searchForm.value;
      if (from === to) alert("Desination and departure shouldn't be same");
      else if(!this.cities.includes(from) || !this.cities.includes(to)) alert("City not found");
      else this.route.navigate([`flight/${from}_to_${to}`])
    }
  }
}















// ngOnInit() {
//   this.mybreakpoint = 5;
//   this.filteredOptions = this.myControl.valueChanges.pipe(
//     startWith(''),
//     map((value: any) => this._filter(value)),
//   );
// }

// handleSize(event: any) {
//   console.log(event.target.innerWidth);
//   this.mybreakpoint = (event.target.innerWidth <= 915 ) ? 2 : 3;
// }