import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.book = new Book();
  }

  saveBook(){
    this.bookService.saveBook(this.book)
    .subscribe(book => this.goBack());
  }

  goBack() {
    this.navCtrl.back();
  }

}
