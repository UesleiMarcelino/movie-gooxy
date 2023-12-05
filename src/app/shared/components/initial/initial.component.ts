import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {
 constructor(private translate: TranslateService) {

 }

//  switchLanguage(language: string) {
//   this.translate.use(language)
//  }

}
