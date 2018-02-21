import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../shared/services/gallery.service';
import { Gallery } from '../../shared/models/gallery.model';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html'
})
export class SingleGalleryComponent implements OnInit {

  private gallery: Gallery;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService) {
}

public ngOnInit() {
  console.log('prvo', this.gallery);

  this.route.data
      .subscribe((data: { gallery: Gallery }) => {
          this.gallery = data.gallery;
          console.log(this.gallery, data);
      });
}


}
