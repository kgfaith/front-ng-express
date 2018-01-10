import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const API_URL:string = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class DataService {

    constructor(private http: Http) {
    }

    getPosts():Observable<Post[]> {
        return this.http.get(API_URL).map((response:Response) => response.json());
    }
}