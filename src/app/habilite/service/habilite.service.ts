import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeHabilitationDto } from '../model/employe-habilitation-dto';

@Injectable({
  providedIn: 'root'
})
export class HabiliteService {
  private apiUrl = 'http://localhost:9090/api/employes/habilitations-proches'; 

  constructor(private http: HttpClient) {}

  getEmployesAvecPostesHabilitesProches(): Observable<EmployeHabilitationDto[]> {
    return this.http.get<EmployeHabilitationDto[]>(this.apiUrl);
  }
}
