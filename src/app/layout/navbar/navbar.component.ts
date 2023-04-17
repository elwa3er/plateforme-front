import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  categ:string='';
  data:Categorie[] =[];
  constructor(private dataCategorie: CategorieService, private router: Router) { }
  
  
  ngOnInit() {
    this.dataCategorie.getCategorie()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data); 
    });
  }
  public navigateToSection(section: string) {
    this.router.navigate(["/"]);
    window.location.hash = '';
    window.location.hash = section;
  }

}
