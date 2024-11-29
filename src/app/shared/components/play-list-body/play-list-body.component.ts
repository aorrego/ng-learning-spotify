import { Component } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
import { CommonModule } from '@angular/common';
import { OrderListPipe } from "../../pipe/order-list.pipe";

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule, OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {
  tracks: Array<TrackModel> = [];

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default;
    this.tracks = data;
  }
}
