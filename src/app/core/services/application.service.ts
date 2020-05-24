import { Injectable } from "@angular/core";

@Injectable()
export class ApplicationService {
  private _rut: string;
  private _phone: string;
  private _email: string;
  private _rent: number;

  constructor() {}

  setRut(rut: string): void {
    this._rut = rut;
  }

  setPhone(phone: string): void {
    this._phone = phone;
  }

  setEmail(email: string): void {
    this._email = email;
  }

  setRent(rent: number): void {
    this._rent = rent;
  }
}
