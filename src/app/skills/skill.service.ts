import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ISkills} from "./skills.interface";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  apiUrl: string = './../assets/skill.json';

  constructor(private http: HttpClient) { }

  getSkill() {
    return this.http.get<ISkills[]>(this.apiUrl);
  }
}
