import { Component } from '@angular/core';
import { TalentCard } from '../../shared/talent-card/talent-card';
import { TALENTS, Talent } from '../../data/talents';

@Component({
  selector: 'app-talents',
  standalone: true,
  imports: [TalentCard],
  templateUrl: './talents.html',
  styleUrls: ['./talents.css']
})
export class Talents {
  talents: Talent[] = TALENTS;
}