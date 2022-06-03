import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personaje } from 'src/app/interfaces/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes!: Personaje[] ;
  personajesCopy!: Personaje[];

  constructor(public httpClient:HttpClient) { 
    this.getData();
  }

  async getData(){
    await  this.httpClient.get(environment.apiUrl + 'characters')
    .subscribe((res:any) => {
      console.table(res);
      this.personajes = res.map(({char_id, name, nickname, img, status, occupation}: Personaje) => {
        return {
          char_id: char_id,
          name: name,
          nickname: nickname,
          img: img,
          status: status,
          occupation: occupation,
        }
      });
      this.personajesCopy = this.personajes;
    });
  }

  filter(e:any){
    const search = e.target.value;
    this.personajes = this.personajesCopy.filter(({name, nickname}: Personaje) => {
      return name.toLowerCase().includes(search.toLowerCase()) || nickname.toLowerCase().includes(search.toLowerCase());
    });
  }
  

}
