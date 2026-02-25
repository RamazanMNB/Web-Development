import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../service/album';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos implements OnInit {

  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
      this.photos = data;
      this.loading = false;
    });
  }

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
