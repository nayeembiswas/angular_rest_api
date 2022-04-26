import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {

  constructor(private http: HttpClient) { }
  callJsonGetRestApiResponse: string;
  callJsonDataRestApiResponse: string;
  callFormDataRestApiResponse: string;
  ngOnInit() {

console.log("hit");
       
      
  }

  onClick(type:string="callJsonGetRestApi"){
      this.callJsonGetRestApi("https://api.github.com/search/users?q=foo%20in:login").subscribe(data=>{
          this.callJsonGetRestApiResponse=JSON.stringify(data);
          console.log("called from callJsonGetRestApi",data)
      });
  }

// calling get rest api   
callJsonGetRestApi(url):Observable<any> {
   
    
    return this.http.get(url)
      .pipe(map((data: any) => {
      //handle api 200 response code here or you wanted to manipulate to response
        return data;

      }),
        catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );

  }   
}
