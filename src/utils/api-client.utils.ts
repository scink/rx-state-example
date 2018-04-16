import {of} from 'rxjs/observable/of';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as qs from 'querystring';
import {AjaxRequest} from 'rxjs/observable/dom/AjaxObservable';
import {Observable} from 'rxjs/Observable';
import {failure, pending, RemoteData, success} from '@devexperts/remote-data-ts';

export enum RequestMethod {
	Get = 'GET',
	Post = 'POST',
	Put = 'PUT',
	Delete = 'DELETE',
}

export class ApiClient {
	static create(baseHref: string) {
		return new ApiClient(baseHref);
	}

	readonly RequestMethod = RequestMethod;

	private constructor(private readonly baseHref: string) {}

	readonly request = <Response = never>(request: AjaxRequest): Observable<RemoteData<Error, Response>> => {
		const url = `${this.baseHref}${request.url}`;

		return ajax({
			withCredentials: false, // TODO
			responseType: 'json',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			...request,
			url,
			body: request.body ? JSON.stringify(request.body) : undefined,
		})
			.map(response => success<Error, Response>(response.response))
			.catch(error => of(failure<Error, Response>(error)))
			.startWith<RemoteData<Error, Response>>(pending);
	};

	readonly get = <Response = never>(url: string, query?: {}): Observable<RemoteData<Error, Response>> =>
		this.request({
			url: this.buildUrl(url, query),
			method: 'GET',
		});

	readonly post = <Response = never>(url: string, body: {}): Observable<RemoteData<Error, Response>> =>
		this.request({
			url,
			method: 'POST',
			body,
		});

	readonly remove = <Response = never>(url: string, query = {}): Observable<RemoteData<Error, Response>> =>
		this.request({
			url: this.buildUrl(url, query),
			method: 'DELETE',
		});

	readonly put = <Response = never>(url: string, body?: {}): Observable<RemoteData<Error, Response>> =>
		this.request({
			url,
			method: 'PUT',
			body,
		});

	private buildUrl(url: string, query?: {}): string {
		return query ? `${url}?${qs.stringify(query)}` : url;
	}
}
