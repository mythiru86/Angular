import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"]
})
export class NotFoundComponent implements OnInit {
  constructor(private route: ActivatedRoute, private routeService: Router) {}
  private errorMessage:any;
  ngOnInit() {

    console.log(this.route.snapshot);
    this.errorMessage = this.route.snapshot.queryParams.error;


  }
}
