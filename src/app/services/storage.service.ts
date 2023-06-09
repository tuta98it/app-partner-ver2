import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import {Constant} from '../shared/constants/constant.class';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localstorage: Storage | null = null;
  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.localstorage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    return this.storage?.set(key, value);
  }
  public get(key: string) {
    return this.storage?.get(key);
  }
  setSelectedUser(user: any): any {
    return this.storage.set(Constant.STORAGE_USERINFO, user);
  }
  removeInfoUserStorage(){
    this.storage.remove(Constant.STORAGE_USERINFO);
  }
  removeInitialDataStorage(){
    this.storage.remove(Constant.INIT_DATA);
  }
  removeTokenStorage(){
    this.storage.remove(Constant.TOKEN);
  }
  removeAllStorage(){
    this.removeInfoUserStorage();
    this.removeInitialDataStorage();
    this.removeTokenStorage();
  }
  clearAll(){
    this.localstorage.clear();
    this.removeAllStorage();
  }
  getSelectedUser(): any {
    return this.storage.get(Constant.STORAGE_USERINFO);
  }
}
