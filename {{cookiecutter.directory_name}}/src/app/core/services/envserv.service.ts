import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root'
}) */
export class EnvservService {
  public apiUrl = '';

  public enableDebug = true;
  public adfsURL = '';
  public client_id = '';
  public redirect_uri = '';
  public aws_region = '';
  public provider_url = '';
  public pool_id = '';

  constructor() {
  }
}
