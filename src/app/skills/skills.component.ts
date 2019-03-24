import { Component, OnInit } from '@angular/core';
import {SkillService} from "./skill.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getSkill().subscribe((response) => {
      this.skills = response;
    })
  }

}
