import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  apiUrl: string = './../assets/skill.json';

  constructor(private httpClient: HttpClient) { }

  getSkill() {
    return this.httpClient.get(this.apiUrl);
  }
}
