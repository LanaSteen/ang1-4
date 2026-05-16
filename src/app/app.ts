
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Home } from "./home/home";
import { Restaurant } from './restaurant/restaurant';
import { Todo } from './todo/todo';
import { Parent } from './parent/parent';
import { Forms } from './forms/forms';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Footer, Header, RouterOutlet, Home, Restaurant, Todo, Parent ,Forms]
})


export class App {



}









// buton   h2   0 1 2 3 4 5