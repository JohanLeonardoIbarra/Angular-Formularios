import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailValidarorService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    return this.http.get<any>(`http://localhost:3000/usuarios?q=${email}`).pipe(
      delay(3000),
      map((res) => {
        return res.length === 0 ? null : { emailtomado: true };
      })
    );
  }
}
