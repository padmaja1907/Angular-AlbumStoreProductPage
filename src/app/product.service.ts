import { Injectable } from '@angular/core';
import{Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  getAlbum(arg0: number): any {
    throw new Error("Method not implemented.");
  }
  private _albumUrl = '../assests/album.json';

  constructor(private_http:Http) {
    return this._http.get(this._albumUrl).map((response))=> response.json());
   }

}
