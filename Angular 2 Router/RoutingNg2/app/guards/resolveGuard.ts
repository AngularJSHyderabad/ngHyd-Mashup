import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
@Injectable()
export class ResolveGuard implements Resolve<String> {
  constructor(private _booksService: BooksService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Promise<String>|boolean {
    let id = +route.parent.params['id'];
    return this._booksService.getBookIntroduction(id).then(intro => {
      if (intro) {
        return intro;
      } else { // id not found
        return "No introduction avialable for this book";
      }
    });
  }
}
