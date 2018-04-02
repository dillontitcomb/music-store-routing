import { Component } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  constructor(private router: Router) {}

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };

  albums: Album[] = [
    new Album("Bob's Jams", "Bob", "Bob's magnum opus.", 1),
    new Album("Joe's Jams", "Joe", "Joe's magnum opus.", 2),
    new Album("Samantha's Jams", "Samantha", "Samantha's magnum opus.", 3),
    new Album("Adrien's Jams", "Adrien", "Adrien's magnum opus.", 4)
  ];
}
