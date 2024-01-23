import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

//models
import { CharacterResults } from "../../models/character-results";
import { Character } from "../../models/characters"

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  allCharacters: Character[] = [];
  allCharactersFiltered: Character[] = [];
  loaded: boolean = false;
  url: string = `https://rickandmortyapi.com/api/character`;

  constructor(private http: HttpClient) {
    this.loadCharacters();
  }

  // get all the characters of a page
  getCharacters(page: number): Observable<CharacterResults> {
    // makes an api call to get all characters
    return this.http.get<CharacterResults>(`${this.url}/?page=${page}`);
  }

  // get a single character by id
  getCharacter(id: number): Observable<Character> {
    if (id) {
      // makes an api call to get a single character
      return this.http.get<Character>(`${this.url}/${id}`);
    }
    // Add a default return value for the case when 'id' is falsy
    return new Observable<Character>();
  }

  // get a single character by url
  getCharacterByURL(url: string): Observable<Character> {
    if (url) {
      return this.http.get<Character>(url);
    }
    // Add a default return value for the case when 'url' is falsy
    return new Observable<Character>();
  }

  // Search all the characters containing the string
  searchCharacters(text: string) {
    if (this.allCharacters.length === 0) {
      this.loadCharacters().then(() => {
        this.filterCharacters(text);
      })
    } else {
      this.filterCharacters(text);
    }
  }

  // Load all the characters from all pages
  private loadCharacters() {
    return new Promise<void>((resolve, reject) => {
      this.http.get<CharacterResults>(this.url).subscribe((result: CharacterResults) => {
        let numPages = result.info.pages;

        let loadPage = (page: number) => {
          if (page <= numPages) {
            this.getCharacters(page).subscribe((characterResult: CharacterResults) => {
              let pageCharacters = characterResult.results;

              pageCharacters.forEach((character) => {
                this.allCharacters.push(character);
              });

              loadPage(page + 1);
            });
          } else {
            this.loaded = true;
            resolve(); // Resolve the promise to indicate completion
          }
        };

        loadPage(1);
      }, error => {
        reject(error);
      });
    });
  }

  // Find the characters containing the string
  private filterCharacters(text: string) {
    this.allCharactersFiltered = [];
    text = text.toLowerCase();

    this.allCharacters.forEach((character) => {
      let nameLower = character.name.toLowerCase();
      let specie = character.species.toLowerCase();

      if (nameLower.indexOf(text) >= 0 || specie.indexOf(text) >= 0) {
        this.allCharactersFiltered.push(character);
      }
    });

  }
}
