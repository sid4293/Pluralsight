import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/do'; 
import 'rxjs/add/observable/throw'; 
import { HttpResponse, HttpErrorResponse } from "@angular/common/http/src/response";

@Injectable()
export class ProductService{
    private _productUrl='./products.json';
    constructor(private _http:HttpClient){}
getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._productUrl)
    .do(data =>console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
}
private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message)
}
}