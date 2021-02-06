import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrupalService {

  constructor(private httpClient: HttpClient) {
  }

  getHomeData(): Observable<any[]> {
    return this.httpClient.get(environment.drupalUrl)
      .pipe(map(response => this.processResponse(response)));
    //return of(this.processResponse(json));
  }

  private replaceUrl(imageUrl): string {
    console.log(imageUrl);
    return imageUrl ? ('/cache/' + imageUrl.replace(/https?:\/\//gi, '')) : imageUrl;
  }

  private processResponse(response: any): any[] {
    console.log(response);
    let sections = [];

    if (response && response[0]) {
      sections = response[0].content;

      if (sections) {
        for (const section of sections) {
          if (section.type === 'welcome_message' && section.data) {
            const data = section.data;

            if (data) {
              section.messageAuthenticated = data.messageAuthenticated.value;
              section.messageAnonymous = data.messageAnonymous.value;
            }
          }

          if (section.type === 'seasonal_section') {
            const slides = section.data.seasonalCampaigns;

            if (slides) {
              for (const slide of slides) {
                /*slide.image = this.isMobile() ? slide.data.imageMobile.image_url : slide.data.imageDesktop.image_url;
                slide.image = this.replaceUrl(slide.image);*/
                if (slide.data.imageMobile) {
                  slide.data.imageMobile.image_url = this.replaceUrl(slide.data.imageMobile.image_url);
                }

                if (slide.data.imageDesktop) {
                  slide.data.imageDesktop.image_url = this.replaceUrl(slide.data.imageDesktop.image_url);
                }

                slide.description = slide.data.copy.value;
                slide.button = {
                  link: slide.data.cta.uri,
                  label: slide.data.cta.title
                };
              }
            }

            section.slides = slides;
          }

          if (section.type === 'catalog') {
            section.title = section.data.title.value;
            section.description = section.data.description.value;
            const slides = section.data.products;

            if (slides) {
              for (const slide of slides) {
                slide.image = slide.data.imageDesktop.image_url;
                slide.link = slide.data.buyLink?.uri;
              }
            }

            section.slides = slides;
          }
        }
      }
    }

    return sections;
  }

  private isMobile(): boolean {
    //return window.screen.width < 768;
    return false;
  }
}
