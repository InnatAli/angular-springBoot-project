import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/auth.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: Book = new Book();
  isEditMode = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.bookService.getBook(id).subscribe(data => {
        this.book = data;
      });
    }
  }

  saveBook(): void {
    if (this.isEditMode) {
      this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService.createBook(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
