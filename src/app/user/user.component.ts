import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Utilities } from '../shared/utilities';

@Component({
    selector: 'app-user',
    templateUrl: '../shared/list.html',
    styleUrls: ['../app.component.css']
})

export class UserComponent extends Utilities implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        super();
    }

    ngOnInit() {
        this.path = '/user/';
        this.dataItem = 'user';
        this.nextPath = '/album/';

        this.attributes = this.keys(this.removeColumns(this.route.snapshot.data)[0]);
    }


}
