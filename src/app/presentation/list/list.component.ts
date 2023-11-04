import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idOfCalledList = params['id'];
    });
  }
}
