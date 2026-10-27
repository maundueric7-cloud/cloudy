import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Talent } from '../../data/talents';

@Component({
  selector: 'app-talent-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './talent-card.html',
  styleUrls: ['./talent-card.css']
})
export class TalentCard {
  @Input({ required: true }) talent!: Talent;
}