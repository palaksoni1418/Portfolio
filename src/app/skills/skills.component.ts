import { Component, OnInit } from '@angular/core';
import {SkillService} from "./skill.service";
import {ISkills} from "./skills.interface";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: ISkills[];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getSkill().subscribe((responseData: ISkills[]) => {
      this.skills = responseData;
    })
  }

}
