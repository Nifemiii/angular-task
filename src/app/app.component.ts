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
  showToasterr: any;
  x:any;
  

  constructor(private country:CountriesService, private toastr:ToastrService, private router:Router) {
    this.country.getData().subscribe(data => {
      this.data= data
      console.warn(data);
      
    });

    
    
     
    this.showToast = ():void => {
      const isChecked = document.querySelector('.true') as HTMLInputElement;
      isChecked.checked ? 
      this.toastr.success('some message', 'title')
      :
      this.toastr.error('some message', 'title');
    }; 

  }

  goTopage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  } 
}
