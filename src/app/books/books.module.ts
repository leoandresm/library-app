import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BooksPage } from './books.page';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  }, {
    path: 'create',
    component: BookDetailComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooksPage, BookDetailComponent]
})
export class BooksPageModule {}
