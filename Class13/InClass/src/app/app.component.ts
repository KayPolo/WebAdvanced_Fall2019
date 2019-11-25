import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name:string = 'Karla';
  // lastname:string = 'Polo';

  // constructor(){
  //     console.log(12345);
  //     // this.lastname = 'Palmer'

  //     // this.changeName('Peter');
  // }

  // changeName = (name:string)=>{
  //     this.name = name;
  //     this.lastname = 'Palmer';
  // }

    showModal = ()=>{
      let closeModal = 
      document.getElementById('my-modal')
      closeModal.classList.remove('hidden')
      closeModal.classList.add('show');
    }


}
