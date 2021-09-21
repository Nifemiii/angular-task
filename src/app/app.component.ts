import { Component } from '@angular/core';
import {CountriesService} from './countries.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'angular-task';
  data:any;
  showToast: any;
  goTopage:any;
  showToasterr: any;
  x:any;
  

  constructor(private country:CountriesService, private toastr:ToastrService, private router:Router) {
    this.country.getData().subscribe(data => {
      this.data= data
      console.warn(data);
      
    });

    
    
     
    this.showToast = (pageName:string):void => {
      const isChecked = document.querySelector('.true') as HTMLInputElement;
      if (isChecked.checked) {
        this.toastr.success('Your form has been recorded', 'Successful')
        this.router.navigate([`${pageName}`]);
      } else {
        this.toastr.error('Error', 'Try Again');
      }
  

    }; 

  }

  
}
