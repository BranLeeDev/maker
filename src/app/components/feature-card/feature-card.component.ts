import { Component, Input } from '@angular/core';
import { Feature } from 'src/app/models/feature.model';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent {
  @Input() feature!: Feature;
}
