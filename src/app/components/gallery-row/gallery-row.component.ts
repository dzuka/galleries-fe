import { Component, OnInit, Input} from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';

@Component({
  selector: '[galleryRow]',
  templateUrl: './gallery-row.component.html',
  styleUrls: ['./gallery-row.component.css']
})
export class GalleryRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
