import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string;
  private productsUrl = '/api/products';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(_ => console.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  public getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched Product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  public updateProduct(product: Product): Observable<any> {
    const url = `${this.productsUrl}/${product.Id}`;
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${product.Id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions).pipe(
      tap((newProduct: Product) => console.log(`added product w/ id=${newProduct.Id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  public deleteProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted product id = ${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Error:', error);

      return of(result as T);
    };
  }
}

export interface Product {
  Id: number,
  Name: string,
  Description: string,
  Price: number,
  Quantity: number
};
