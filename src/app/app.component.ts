import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count:number = 0;
  over:number = -1;
  text:string = "";

  pessoas = [];

  constructor(private peopleService: PeopleService){
    
  }

  ngOnInit(): void {
    this.getPeople()
    let interval = setInterval(() => {
      this.count++; 
      this.over++;
      if(this.count === 10){
        clearInterval(interval)
      }
    },1000)
  }

  clicou(nome:string): void{
    console.log(nome," clicou em mim!")
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

}
