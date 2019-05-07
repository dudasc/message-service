import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
    //Para envia uma mensagem    
    this.messageService.sendMessage({ name: "Eduardo", showHeader: true })

    //Pare receber a mensagem 
    this.messageService.getMessage().subscribe(message => {
      this.name = message.name;
      this.showHeader = message.showHeader;
    });
*/
export class MessageService {

  private subject = new Subject<any>();

  //Envia uma mensagem a partir de um component
  sendMessage(message: any) {
    this.subject.next(message);
  }

  //Limpa a mensagem
  clearMessage() {
    this.subject.next();
  }

  //Recebe a mensagem em um component
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
