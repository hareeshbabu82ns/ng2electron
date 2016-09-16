import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular2-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: "He-Man" },
      { id: 2, name: "Super-Man" },
      { id: 3, name: "Spider-Man" },
      { id: 4, name: "Bat-Man" },
      { id: 5, name: "Wonder-Women" },
      { id: 6, name: "X-Men" },
      { id: 7, name: "Ant-Man" },
      { id: 8, name: "Cat-Women" },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }
}