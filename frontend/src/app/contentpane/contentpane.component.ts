import { Component, OnInit } from '@angular/core';
import { Content } from '../content';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-contentpane',
  templateUrl: './contentpane.component.html',
  styleUrls: ['./contentpane.component.sass']
})
export class ContentpaneComponent implements OnInit {
  
  content: Content;

  constructor(private contentService: ContentService) { }

  getContent(): void {
    this.content = this.contentService.getContent();
  }

  ngOnInit(): void {
    this.getContent();
	//this.http.get('assets/posts/post1.txt').subscribe(data => {
	    // console.log(data.text());
	//})
  }
t
}
