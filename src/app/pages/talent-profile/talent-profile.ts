import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TALENTS, Talent } from '../../data/talents';

@Component({
  selector: 'app-talent-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './talent-profile.html',
  styleUrls: ['./talent-profile.css']
})
export class TalentProfile {
  talent: Talent | undefined;

  constructor(private route: ActivatedRoute) {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.talent = TALENTS.find(t => t.slug === slug);
  }
}