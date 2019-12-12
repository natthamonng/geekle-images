import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {

  constructor() { }

  async searchPhotosPromise(searchTerm: string) {
    const count = 30;
    
    let url = "https://api.unsplash.com/search/photos?query=" + searchTerm + '&per_page=' + count;
    url += "&client_id=3f8a39699ebc36519cf9851a3ff8d69c9220edef8add5bfdb838a0869fab4be3";

    return fetch(url)
      .then(res => res.json())
      .then(data => {
          // Tableau de résultats
          console.log(data)
          return data.results;
    })
  }
}