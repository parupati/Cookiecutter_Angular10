import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import * as APIG from 'aws-apig-client';
import { EnvservService } from './envserv.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private auth: AuthService, private env: EnvservService) { }

  getData(method, url, params, body, additionalParams) {
    let result = this.auth.authenticate();
    if (result) {
      let apigClient = APIG.newClient({
        accessKey: this.auth.AccessKeyId,
        secretKey: this.auth.SecretKey,
        sessionToken: this.auth.SessionToken,
        invokeUrl: this.env.apiUrl,
        region: this.auth.aws_region,
        systemClockOffset: 0,
        retries: 4,
        retryCondition: (err) => {
          return err.response && err.response.status === 500;
        },
        retryDelay: 100
      });
      if (additionalParams === null) {
        additionalParams = {
          'withCredentials': true,
        };
      }
      return new Observable((observer) => {
        apigClient.invokeApi(params, url, method, additionalParams, body)
          .then((result) => {
            observer.next(result);
          }).catch((result) => {
            observer.error(result);
            if (result && result.response && result.response.status === 403) {
              this.auth.authenticate();
            }
          });
      });
    }
  }
}
