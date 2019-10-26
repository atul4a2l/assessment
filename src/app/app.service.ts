import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient, public toastController: ToastController) {

  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getUsers(): Observable<any> {
    let url: string = 'https://sandbox786.com/ng-api/getUsers';
    let postData = { "auth_code": 'test298' };
    return this.http.post(url, postData, this.httpOptions)
      .pipe(
        catchError(this.handleError('getUsers'))
      );
  }

  updateUser(data): Observable<any> {
    let url: string = 'https://sandbox786.com/ng-api/updateUser';
    let auth = { "auth_code": 'test298'};
    let postData = {...auth, ...data}
    return this.http.post(url, postData, this.httpOptions)
      .pipe(
        catchError(this.handleError('updateUser'))
      );
  }
  
  createUser(data): Observable<any>{
    let url: string = 'https://sandbox786.com/ng-api/createUser';
    let auth = { "auth_code": 'test298'};
    let postData = {...auth, ...data}
    return this.http.post(url, postData, this.httpOptions)
      .pipe(
        catchError(this.handleError('createUser'))
      );
  }

  async showToast(msg: string) {
    const toast = await this.toastController.create({
     message: msg,
     duration: 3000,
     position: 'bottom'
   });
   toast.present();
 }

}
