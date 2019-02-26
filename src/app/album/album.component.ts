import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Utilities } from '../shared/utilities';

@Component({
  selector: 'app-album',
  templateUrl: '../shared/list.html',
  styleUrls: ['../app.component.css']
})


export class AlbumComponent extends Utilities implements OnInit {
    constructor(private route: ActivatedRoute,
                private router: Router
               ) {
        super();
    }

    ngOnInit() {
        this.path = '/album/';
        this.nextPath = '/photo/';
        this.dataItem = 'album';
        this.neglectColumn = ['userId'];

        this.attributes = this.keys(this.removeColumns(this.route.snapshot.data)[0]);
    }


    goBack() {
        this.router.navigate(['user']);
    }
}
