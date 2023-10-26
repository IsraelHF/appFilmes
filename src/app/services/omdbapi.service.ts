import { Injectable } from '@angular/core';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode',
}

@Injectable({
  providedIn: 'root',
})
export class OmdbapiService {
  url = 'http://www.omdbapi.com';
  apiKey = '7b67e4bc';

  constructor() {}
}
