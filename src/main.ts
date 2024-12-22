import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeroFormComponent } from './app/hero-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroFormComponent],
  template: `
    <app-hero-form></app-hero-form>
  `
})
export class App {}

bootstrapApplication(App);