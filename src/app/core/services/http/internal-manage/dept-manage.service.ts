import {Injectable} from '@angular/core';
import {BaseHttpService} from '../base-http.service';
import {Observable} from 'rxjs';
import {DeptObj} from '../../types';

@Injectable({
  providedIn: 'root'
})
export class DeptManageService {

  constructor(public http: BaseHttpService) {
  }

  public getDeptList(): Observable<DeptObj[]> {
    return this.http.get('/department');
  }

  public delDept(idarray: number[]): Observable<any> {
    console.log({ids: idarray});
    return this.http.delete(`/department`, {ids: idarray});
  }

  public getDeptDetail(id: number): Observable<DeptObj> {
    return this.http.get(`/department/${id}`);
  }

  public addDept(param: DeptObj): Observable<any> {
    return this.http.post('/department', param, {needSuccessInfo: true});
  }

  public editDept(param: DeptObj): Observable<any> {
    return this.http.put('/department', param, {needSuccessInfo: true});
  }

}
