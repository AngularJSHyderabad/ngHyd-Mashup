import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<div><h1>Library</h1><router-outlet></router-outlet></div>`,
    styles: ['div { border: 1px solid green; height: 700px; }', 'div h1 { text-align: center; }']
})
export class AppComponent { }
