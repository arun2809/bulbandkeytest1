import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  imgdetails;
  constructor(public _http:HttpClient) { }

  foodimg()
  {
    return this._http.get(`https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=url_o&per_page=30&page=1&lang=en-US&text=food&method=flickr.photos.search&api_key=1a6e107b85e467313c400376ce50b1b9&format=json&nojsoncallback=1`)
   
   //return this._http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&text=food&api_key=1a6e107b85e467313c400376ce50b1b9&per_page=50&format=json&nojsoncallback=1&extras=url_o&sort=relevance`)
//return this._http.get(` https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=7ced962dd109f5d734f3e2c3139e74f8&gallery_id=6065-72157617483228192&format=json&nojsoncallback=1&auth_token=72157690350475323-5ee236308ec9570c&api_sig=2b762cef209db96d4b6ee92d6f787e25`)
//return this._http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1a6e107b85e467313c400376ce50b1b9&tags=food&format=json&nojsoncallback=1&text=cats&extras=url_o`)
}

imginfo(id)
{
  return this._http.get(`https://api.flickr.com/services/rest?photo_id=`+id+`&sort=date-posted-desc&extras=icon_urls& expand_bbml=1&use_text_for_links=1&secure_image_embeds=1&bbml_need_all_photo_sizes=1&primary_photo_longest_dimension=405&offset=0&limit=9&viewerNSID=&method=flickr.photos.comments.getList&csrf=&api_key=1a6e107b85e467313c400376ce50b1b9&format=json&nojsoncallback=1`)
}


}
