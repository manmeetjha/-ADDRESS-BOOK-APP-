import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseURL="http://localhost:8080/api/v1/addresses"
  constructor(private httpClient : HttpClient) { }


  getAllAddress():Observable<Address[]>{
   return this.httpClient.get<Address[]>(`${this.baseURL}`);
    }

  createAddress(address:Address):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,address);
  }
    
  getAddressById(id:number):Observable<Address>{
    return this.httpClient.get<Address>(`${this.baseURL}/${id}`);
  }

  updateAddress(id:number, address:Address):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,address);
  }

  deleteAddress(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  }


