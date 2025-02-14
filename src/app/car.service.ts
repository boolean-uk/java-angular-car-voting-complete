import { Injectable } from '@angular/core';
import { Car } from './cars/models/car';
import { CARS } from './cars/data/cars';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = CARS;
  private currentId: number = this.cars.length;

  public getAllCars(): Car[] {
    return this.cars;
  }

  public getCarById(id: number | null): Car | null {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      return null;
    }
    return car;
  }

  public addCar(car: Car) {
    this.currentId++;
    this.cars.push({ ...car, id: this.currentId })
  }

}
