import { Injectable } from '@angular/core';
import { Content } from './content';
import { post } from './post1';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Content {
    return post;
  }
}
