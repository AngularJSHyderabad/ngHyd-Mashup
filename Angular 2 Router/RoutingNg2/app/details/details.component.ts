import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BooksService } from '../services/books.service';
@Component({
    selector: 'book-details',
    styles: ['td { vertical-align: top; border: 1px solid grey; padding: 5px;}', 'table { margin: 10px;}', 'div { padding: 0 10px; }'],
    template: `<style>
    ul.tab {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
    }
    ul.tab li {float: left;}
    ul.tab li a {
        display: inline-block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        transition: 0.3s;
        font-size: 17px;
    }
    ul.tab li a:hover {background-color: #ddd;}
    ul.tab li a:focus, .active {background-color: #ccc;}
    .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
    </style>
    <table>
        <tr>
            <td>
                <h4>{{ book.title}}</h4>
                <h4>{{ book.author}}</h4>
            </td>
            <td>
                <h4>Category: {{ book.category}}</h4>
                <h4>Price: {{ book.price}}</h4>
                <h4>No of Pages: {{ book.pages}}</h4>
            </td>
            <td>
                <h4>Language: {{ book.language}}</h4>
                <h4>Dimensions: {{ book.dimensions}}</h4>
                <h4>Rating: {{ book.rating}}</h4>
                <h4>Publisher: {{ book.publisher}}</h4>
            </td>
        </tr>
    </table>
    <div>
        <ul class="tab">
            <li><a href="javascript:void(0)" class="tablinks" (click)="onTabChange('author')">About Author</a></li>
            <li><a href="javascript:void(0)" class="tablinks"  routerLink="introduction">About Book</a></li>
        </ul>
    </div>
    <br>
    <router-outlet></router-outlet>
    <a [routerLink]="['/dashboard']">Go To Dashboard</a>`
})
export class DetailsComponent implements OnInit {
    book: Book;
    id: number;
    routeParams: any;
    ngOnInit() {
        this.routeParams = this.route.params.subscribe(params => {
            this.id = +params['id'];
            console.log(this.id);
        });
        this.book = this._booksService.getBookDetails(this.id);
    }
    ngOnDestroy() {
        this.routeParams.unsubscribe();
    }
    constructor(private route: ActivatedRoute, private router: Router, private _booksService: BooksService) { };
    onTabChange(name: string) {
        this.router.navigate([name], { relativeTo: this.route });
    };
}
