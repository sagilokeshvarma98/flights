import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private _QTE: QuoteService) { }

  quote: string = "Wait for random quotes...";

  ngOnInit(): void {
    this.changeQuotes();
  }

  changeQuotes() {
    let id: number = 1
    let sendQuotes = setInterval(() => {
      this._QTE.getQuotesById(id).subscribe(res => this.quote = res)
      if (id === 6) { id = 0; }
      id++;
    }, 10000)
  }


}
