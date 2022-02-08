import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  private ls = window.localStorage;
  constructor() { }

  public setItem(key, value) {
    value = JSON.stringify(value);
    this.ls.setItem(key, value);
    return true;
  }

  public getItem(key) {
    const value = this.ls.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      // console.log(e)
      return null;
    }
  }

  public setToken(value) {
    return this.setItem('Token', value);
  }

  public getToken() {
    return this.getItem('Token');
  }

  public deleteToken() {
    this.ls.removeItem('Token');
  }

  public setAccessToken(value) {
    return this.setItem('Authorization', value);
  }

  public getAccessToken() {
    return this.getItem('Authorization');
  }

  public deleteAccessToken() {
    this.ls.removeItem('Authorization');
  }

  public clear() {
    this.ls.clear();
  }
}
