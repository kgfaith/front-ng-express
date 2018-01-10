import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { LcrComponent } from './../app/dna/lcr/containers/lcr/lcr.component';
import {DataService} from "../app/dna/shared/services/data.service";

describe('LcrComponent', () => {
    let component:LcrComponent;
    let fixture:ComponentFixture<LcrComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                imports: [
                    HttpModule
                ],
                declarations: [LcrComponent],
                providers: [DataService],

            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LcrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
