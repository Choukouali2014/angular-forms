import {Component, OnInit} from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  powers = [
    {id: 1, value: 'Really Smart'},
    {id: 2, value: 'Super Flexible'},
    {id: 3, value: 'Weather Changer'},
    {id: 4, value: 'Super Hot'}
  ];
  model = new Hero(15, 'Dr Frank', this.powers[1].value, 'built nothing');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  get diagnostic() {

    return JSON.stringify(this.model);
  }
  selectOption(id: number){

  }
  ngOnInit() {
  }

}
