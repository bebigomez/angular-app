import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>This are the favorite games of {{ username }} </h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="favGame()">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {

  favGameExample = 'Wolverine'

  @Input() username = ''
  @Output() addFavGameEvent = new EventEmitter<string>()

  favGame() {
    this.addFavGameEvent.emit(this.favGameExample)
  }

  games = [
    { "id": 1, "name": "God of War" },
    { "id": 2, "name": "The Last of Us Part II" },
    { "id": 3, "name": "Spider-Man: Miles Morales" },
    { "id": 4, "name": "Demon's Souls" },
    { "id": 5, "name": "Horizon Zero Dawn" }
  ]
}
