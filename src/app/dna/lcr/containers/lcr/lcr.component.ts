import { Component, OnInit } from '@angular/core';

import {DataService} from "../../../shared/services/data.service";
import {Post} from "../../../shared/services/data.service";

@Component({
    selector: 'app-lcr',
    templateUrl: './lcr.component.html',
    styleUrls: ['./lcr.component.scss']
})
export class LcrComponent implements OnInit {
    posts: Post[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getPosts().subscribe((data: Post[]) => this.posts = data);
    }

}
