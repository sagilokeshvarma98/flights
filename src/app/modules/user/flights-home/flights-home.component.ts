import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-flights-home',
  templateUrl: './flights-home.component.html',
  styleUrls: ['./flights-home.component.scss']
})
export class FlightsHomeComponent implements OnInit {
  constructor(private flight: FlightsService) { }

  availableFlights: any[] = []

  ngOnInit(): void {
    this.flight.getFlights().subscribe(res => this.availableFlights = res)
  }
}
