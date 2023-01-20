/*
* Ce fichier contient la définition du service qui
* s'occupe de la récupération des commandes depuis
* le fichier (json) correspondants placé dans le
* dossier ./src/assets
*/

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "./orderSchema";

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  orderUrl: string = "../../assets/orders.json";
  savedOrder!: Order;

  constructor(private http:HttpClient) {}

  getUser(){
    return this.http.get<Order[]>(this.orderUrl)
  }
  saveOnClick(order: Order){
    this.savedOrder = order;
  }
}

