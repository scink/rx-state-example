import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const planetsList$ = new BehaviorSubject<string[]>([]);
export const addPlanet = (item: string) => planetsList$.next(planetsList$.value.concat([item]));
export const getPlanetsList = () => planetsList$;
