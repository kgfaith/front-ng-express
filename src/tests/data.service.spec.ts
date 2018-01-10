import { Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { DataService } from './../app/dna/shared/services/data.service';

function createResponse(body) {
    return Observable.of(
        new Response(new ResponseOptions({ body: JSON.stringify(body) }))
    );
}

class MockHttp {
    get() {
        return createResponse([]);
    }
}

describe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataService,
                { provide: Http, useClass: MockHttp }]
        });
    });

    it('should be created', inject([DataService], (service:DataService) => {
        expect(service).toBeTruthy();
    }));
});
