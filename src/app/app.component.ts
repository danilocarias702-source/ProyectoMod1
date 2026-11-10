import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Application } from '@nativescript/core';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';

import { TareasService } from './core/tareas.service';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  private _activatedUrl: string;
  private _sideDrawerTransition: DrawerTransitionBase;

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions,
    public tareasService: TareasService
  ) {}

  ngOnInit(): void {
    this._activatedUrl = '/home';
    this._sideDrawerTransition = new SlideInOnTopTransition();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects));
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  get pendientes(): number {
    return this.tareasService.contarPendientes();
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  onNavigationItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade'
      }
    });

    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
  }
}
