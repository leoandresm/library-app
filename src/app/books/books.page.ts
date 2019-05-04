import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/models/book';
import { BookService } from '../shared/services/book.service';
import { NavController } from '@ionic/angular';
import { BookDetailComponent } from './book-detail/book-detail.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.bookService.getBooks()
    .subscribe(books => {
      this.books = books;
    })
  }

  goToCreate() {
    this.navCtrl.navigateForward('/books/create');
  }
}
