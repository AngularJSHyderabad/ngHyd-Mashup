import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'introduction',
    template: `<p>{{introduction}}</p>`
})
export class IntroductionComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {};
    introduction: string;
    ngOnInit() {
        this.route.data.forEach((data: { introText: string }) => {
            this.introduction = data.introText;
        });
    }
}
