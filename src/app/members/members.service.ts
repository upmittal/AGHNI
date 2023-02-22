import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {Members} from './members';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor( private http: HttpClient) { }
  get() {
    return this.http.get<Members[]>('http://localhost:3000/members');
  }

  create(payload: Members) {
    return this.http.post<Members>('http://localhost:3000/members', payload);
  }

  getById(id: number) {
    return this.http.get<Members>(`http://localhost:3000/members/${id}`);
   }

   update(payload:Members){
    return this.http.put(`http://localhost:3000/members/${payload.id}`,payload);
   }

   delete(id:number){
    return this.http.delete<Members>(`http://localhost:3000/members/${id}`);
 }
}
