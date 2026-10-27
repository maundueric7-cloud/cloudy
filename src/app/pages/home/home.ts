import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TALENTS } from '../../data/talents';
import { TalentCard } from '../../shared/talent-card/talent-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TalentCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  featured = TALENTS;
}