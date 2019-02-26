import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Utilities } from '../shared/utilities';

@Component({
  selector: 'app-photo',
  templateUrl: '../shared/list.html',
  styleUrls: ['../app.component.css']
})
export class PhotoComponent extends Utilities implements OnInit {

    maxNumberOfPhotos: number = 5;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        super();
    }

    ngOnInit() {
        this.path = '/album/';
        this.dataItem = 'photo';
        this.nextPath = '/photos/';
        this.neglectColumn = ['albumId', 'id', 'thumbnailUrl'];

        this.attributes = this.keys(this.removeColumns(this.route.snapshot.data)[0]);
    }

    sliceResponse(data) {
        return data.slice(0, this.maxNumberOfPhotos);
    }

    goBack() {
        this.router.navigate(['album']);
    }

}
