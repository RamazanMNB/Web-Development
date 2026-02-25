import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../service/album';
import { Album } from '../models/album.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetail implements OnInit {

  album?: Album;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loading = false;
    });
  }

  save() {
    if (!this.album) return;

    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Album updated');
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}
