import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private loaded = false;
  private data?: string[];

  constructor(private httpClient: HttpClient) { }

  async loadWords(): Promise<void> {
    this.data = await lastValueFrom(this.httpClient
      .get('all-words', { responseType: 'text' })
      .pipe(map(data => data
        .split('\n')
        .map(line => line.trim()))));

    this.loaded = true;
  }

  async getRandomWord(): Promise<string> {
    if (!this.loaded) {
      await this.loadWords();
    }

    if (!this.data) {
      throw new Error('Could not load word data.');
    }

    return this.data[Math.floor(Math.random() * this.data.length)];
  }

  async isRealWord(word: string): Promise<boolean> {
    if (!this.loaded) {
      await this.loadWords();
    }

    if (!this.data) {
      return false;
    }

    return this.data.includes(word);
  }
}
