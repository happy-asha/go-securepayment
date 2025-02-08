import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private secretKey = 'Nawaz'; // Change this to a secure key

  constructor() {}

  // Encrypt Data
  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey).toString();
  }

  // Decrypt Data
  decrypt(encryptedValue: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
    // Set item in local storage
    setItem(key: string, data: any): void {
      const encryptedData = this.encrypt(data);
      localStorage.setItem(key, encryptedData);
    }
  
    // Get item from local storage
    getItem(key: string): any {
      const encryptedData = localStorage.getItem(key);
      if (encryptedData) {
        return this.decrypt(encryptedData);
      }
      return null;
    }
}
