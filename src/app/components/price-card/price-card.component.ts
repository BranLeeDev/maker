import { Component, Input } from '@angular/core';
import { SubscriptionPlan } from 'src/app/models/plan.model';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent {
  @Input() subscriptionPlan!: SubscriptionPlan;
}
