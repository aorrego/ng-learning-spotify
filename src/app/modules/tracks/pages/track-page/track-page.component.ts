import { Component, OnInit } from '@angular/core';
import { SectionGenericComponent } from "@shared/components/section-generic/section-generic.component";
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-track-page',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})
export class TrackPageComponent implements OnInit {
  mockTrackList: Array<TrackModel> = [ ];
  ngOnInit(): void {
    const {data}: any= (dataRaw as any).default
    console.log(data);

    this.mockTrackList = data;
  }  
}
