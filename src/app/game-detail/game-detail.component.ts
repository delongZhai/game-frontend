import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  private _url: string = "http://localhost:7000/api/games/";
  public id: string;
  public game: object;

  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.gameService.getGamesById(this.id).subscribe(
        (data) => {
          console.log(data);
          this.game = data
        },
        (err) => console.log(err)
      )
    })
  }
}
