import {Component, inject, Input, OnInit} from '@angular/core';
import {ButtonInterface, CurrentRoute, FooterInterface} from "../../_models/share.interface";
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {ButtonComponent} from "../button/button.component";
import {CommonModule} from "@angular/common";
import {Button} from "primeng/button";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {ComaSeparatorPipe} from "../../_pipes/coma-separator.pipe";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    ButtonComponent,
    Button,
    ComaSeparatorPipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  private nexRoute(currentRoute: string) {
    switch (currentRoute) {
      case '/':
        return 'coffee-mix'
      case '/coffee-mix':
        return 'devices'
      case '/devices':
        return 'name-weight-choice'
      default :
        return ""
    }
  }

  private previousRoute(currentRoute: string) {
    switch (currentRoute) {
      case '/':
        return '/'
      case '/coffee-mix':
        return '/'
      case '/devices':
        return 'coffee-mix'
      case '/name-weight-choice':
        return 'devices'
      default :
        return ""
    }
  }

  private currentRoute!: CurrentRoute
  private router = inject(Router)
  @Input() footer!: FooterInterface
  protected buttons: ButtonInterface[] = [
    {
      hasInnerText: true,
      innerText: "بازگشت",
      severity: "primary",
      hasIcon: true,
      iconName: "arrow-right",
      raised: true,
      hasText: true,
      class: 'F2F2F2 right',
      icon: "pi-arrow-right",
      iconPos: "right",
      operation: () => {
        this.currentRoute === '/' ? console.log('first level') : this.router.navigate([this.previousRoute(this.currentRoute)])
      }
    },
    {
      hasText: true,
      innerText: 'مرحله بعد',
      severity: "primary",
      hasInnerText: true,
      hasIcon: true,
      iconName: "arrow-left",
      iconPos: "left",
      class: 'DDBE88 left',
      operation: () => {
        this.currentRoute === '/name-weight-choice' ? console.log('final') : this.router.navigate([this.nexRoute(this.currentRoute)])

      }
    }
  ]

  ngOnInit() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe({
      next: (event: NavigationEnd) => {
        this.currentRoute = event.url as CurrentRoute;
        this.buttons[1].innerText = this.currentRoute === '/name-weight-choice' ? 'نتیجه نهایی' : 'مرحله بعد'
      }
    })
  }
}
