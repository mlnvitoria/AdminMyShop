import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-mat-navigation',
  templateUrl: './mat-navigation.component.html',
  styleUrls: ['./mat-navigation.component.css']
})
export class MatNavigationComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authorizeService: AuthorizeService
  ) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
