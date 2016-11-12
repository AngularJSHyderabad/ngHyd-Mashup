import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';

@Component({
    selector: 'dashboard',
    template: `<style>
                    .book {
                        display: inline-block;
                        float: left;
                        height: 150px;
                        width: 25%;
                        margin-bottom: 10px;
                    }
                    .book-container {
                        border: 1px solid grey;
                        margin: 5px;
                        height: 85%;
                        padding: 10px;
                        background: #e5e554;
                    }
                    .book-title { 
                        font-size: 22px;
                        color: black;
                        font-weight: bold;
                    }
                    .book-author {
                        font-size: 15px;
                        color: black;
                        font-weight: bold;
                    }
                </style>
              <div>
                    <div *ngFor="let book of books">
                       <div class="book" (click)= onBookClick(book.id)>
                            <div class="book-container">
                                <label class="book-title">{{book.title}}</label><br>
                                <p class="book-author">{{book.author}}</p><br>
                            </div>
                        </div>
                    </div>
               </div>
               <div>     
               </div>
               <div class="book">
                <div class="book-container">
                  <a [routerLink]="['/about']">About</a>
                  <p class="book-author">Lazy Loading...</p><br>
                </div>
               </div>`
})
export class DashboardComponent {
    books: Book[];
    constructor(private route: ActivatedRoute, private router: Router, private booksService: BooksService) {
        this.books = this.booksService.getBooks();
    };

    onBookClick(id: string){
        this.router.navigate(['/details', id ]);
    };
}
