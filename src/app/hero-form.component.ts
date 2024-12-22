import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero, POWERS } from './hero';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container">
      <h1>Hero Form</h1>
      <form #heroForm="ngForm" (ngSubmit)="onSubmit()">
        <div class="form-group" [class.valid]="name.valid && name.touched">
          <label for="name">Name</label>
          <input type="text" 
                 class="form-control" 
                 id="name"
                 required
                 [(ngModel)]="model.name" 
                 name="name"
                 #name="ngModel">
          <div [hidden]="name.valid || name.pristine"
               class="alert alert-danger">
            Name is required
          </div>
        </div>

        <div class="form-group">
          <label for="alterEgo">Alter Ego</label>
          <input type="text" 
                 class="form-control" 
                 id="alterEgo"
                 [(ngModel)]="model.alterEgo" 
                 name="alterEgo">
        </div>

        <div class="form-group" [class.valid]="power.valid && power.touched">
          <label for="power">Hero Power</label>
          <select class="form-control" 
                  id="power"
                  required
                  [(ngModel)]="model.power" 
                  name="power"
                  #power="ngModel">
            <option value="">Select a power...</option>
            <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
          </select>
          <div [hidden]="power.valid || power.pristine"
               class="alert alert-danger">
            Power is required
          </div>
        </div>

        <button type="submit" 
                class="btn btn-success" 
                [disabled]="!heroForm.form.valid">Submit</button>
      </form>

      <div [hidden]="!submitted">
        <h2>Submitted Hero Data:</h2>
        <div class="row">
          <div class="col-xs-3">Name:</div>
          <div class="col-xs-9">{{ model.name }}</div>
        </div>
        <div class="row">
          <div class="col-xs-3">Alter Ego:</div>
          <div class="col-xs-9">{{ model.alterEgo }}</div>
        </div>
        <div class="row">
          <div class="col-xs-3">Power:</div>
          <div class="col-xs-9">{{ model.power }}</div>
        </div>
        <br>
        <button class="btn btn-primary" (click)="submitted=false">Edit</button>
      </div>
    </div>
  `,
  styles: [`
    .container { 
      max-width: 600px; 
      margin: 20px auto;
      padding: 20px;
    }
    .form-group { 
      margin-bottom: 20px; 
    }
    .form-group.valid input,
    .form-group.valid select {
      border-left: 5px solid #42A948;
    }
    .form-control {
      display: block;
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 5px;
    }
    .alert-danger {
      color: #a94442;
      background-color: #f2dede;
      border-color: #ebccd1;
      padding: 10px;
      margin-top: 5px;
      border-radius: 4px;
    }
    .btn {
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
    .btn-success {
      background-color: #42A948;
      color: white;
    }
    .btn-success:disabled {
      background-color: #93cf95;
      cursor: not-allowed;
    }
    .btn-primary {
      background-color: #337ab7;
      color: white;
    }
    .row {
      margin: 8px 0;
    }
  `]
})
export class HeroFormComponent {
  powers = POWERS;
  model: Hero = { name: '', power: '', alterEgo: '' };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Form submitted:', this.model);
  }
}