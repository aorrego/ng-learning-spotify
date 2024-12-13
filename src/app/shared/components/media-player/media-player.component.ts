import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    _id: 1,
    url: 'http://localhost/mp3.mp3',
    cover: 'https://th.bing.com/th/id/OIP.iw8gzLEA4TrMTtp3c4RjDwHaHa?rs=1&pid=ImgDetMain',
    album: 'Heaven and Hell',
    name: 'Heaven & Hell'
  };

  listObservers$:Array<Subscription> = [];
  constructor(private multimediaService: MultimediaService){ }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción...', response);
      }
    );

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    console.log('Componente destruido');

    this.listObservers$.forEach( u => u.unsubscribe());
  }
}
