import { Component } from '@angular/core';
import {
  DefaultLangChangeEvent,
  LangChangeEvent,
  TranslateService,
  TranslationChangeEvent
} from '@ngx-translate/core';

@Component({
  selector: 'change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss'],
})
export class ChangeLanguageComponent {
  siteLanguage = 'English';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'pt-br', label: 'Português(Brasil)' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'ch', label: '中國人' },
  ];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
      .subscribe((event: LangChangeEvent) => {
      });

    this.translate.onTranslationChange
      .subscribe((event: TranslationChangeEvent) => {
      });

    this.translate.onDefaultLangChange
      .subscribe((event: DefaultLangChangeEvent) => {
      });
  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }

    const currentLanguage = this.translate.currentLang;
  }
}
