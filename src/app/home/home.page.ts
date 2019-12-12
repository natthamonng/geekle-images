import { Component } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public results: Array<Object> = [];
  
  constructor(
    private apiSvc: ApiFetchService
  ) {}
  
  getSearchTerm(searchEvent: CustomEvent){
    return searchEvent.detail.value;
  }

  doSearch(searchEvent: CustomEvent){
    const searchTerm: string = this.getSearchTerm(searchEvent);
    this.apiSvc.searchPhotosPromise(searchTerm)
      .then(data => {
        this.results = data;
    });
  }

}
