import { Component } from '@angular/core';
import { Feature } from './models/feature.model';
import { SubscriptionPlan } from './models/plan.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  featuresList: Feature[] = [
    {
      title: 'Indulge your passions',
      description:
        "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
      image: {
        url: '../assets/images/svg/illustration-passions.svg',
        alt: 'Illustration passions',
      },
    },
    {
      title: 'Gain financial freedom',
      description:
        'Start making money work for you. There’s nothing quite like earning while you sleep. ',
      image: {
        url: '../assets/images/svg/illustration-financial-freedom.svg',
        alt: 'Illustration financial freedom',
      },
    },
    {
      title: 'Choose your lifestyles',
      description:
        'Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.',
      image: {
        url: '../assets/images/svg/illustration-lifestyle.svg',
        alt: 'Illustration lifestyle',
      },
    },
    {
      title: 'Work from anywhere',
      description:
        'Selling online means not being pinned down. Want to work AND travel? Go for it!',
      image: {
        url: '../assets/images/svg/illustration-work-anywhere.svg',
        alt: 'Illustration work anywhere',
      },
    },
  ];

  subscriptionsList: SubscriptionPlan[] = [
    {
      title: 'Dip your toe',
      description:
        'Just getting started? No problem at all! Our free plan will take you a long way.',
      price: 0,
      features: [
        'Unlimited products',
        'Basic analytics',
        'Limited marketplace exposure',
        '10% fee per transaction',
      ],
      image: {
        url: '../assets/images/svg/icon-free.svg',
        alt: 'Free plan icon',
      },
    },
    {
      title: 'Dive right in',
      description:
        'Ready for the big time? Our paid plan will help you take your business to the next level.',
      price: 25.0,
      features: [
        'Custom domain',
        'Advanced analytics and reports',
        'High marketplace visibility',
        '5% fee per transaction',
      ],
      image: {
        url: '../assets/images/svg/icon-paid.svg',
        alt: 'Icon for the twenty-five dollar plan',
      },
    },
  ];
}
