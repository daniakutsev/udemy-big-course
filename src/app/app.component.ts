import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arr = [1, 1, 3, 5, 8, 13]

  objs = [
    {
      title: "post1",
      name: "Dania",
      comments: [
        {text: "comm1", name: "Max"},
        {text: "comm1", name: "Max"},
        {text: "comm1", name: "Max"}
      ]
    },
    {
      title: "post2",
      name: "Dania2",
      comments: [
        {text: "comm2", name: "Max"},
        {text: "comm2", name: "Max"},
        {text: "comm2", name: "Max"}
      ]
    },
  ]

}
