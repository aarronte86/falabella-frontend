import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

const API_URL = environment.apiUrl;

interface IApplicationRequest {
  rut: string;
  phone: string;
  email: string;
  rent: number;
}

@Injectable()
export class ApplicationService {
  private _rut: string;
  private _phone: string;
  private _email: string;

  constructor(private http: HttpClient) {}

  setRut(rut: string): void {
    this._rut = rut;
  }

  setPhone(phone: string): void {
    this._phone = phone;
  }

  setEmail(email: string): void {
    this._email = email;
  }

  sendApplication(rent: number): Observable<any> {
    const payload: IApplicationRequest = {
      rut: this._rut,
      phone: this._phone,
      email: this._email,
      rent,
    };

    return this.http.post(`${API_URL}/applications`, payload);
  }
}
