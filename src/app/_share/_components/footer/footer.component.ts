import {Component, inject, Input, OnInit} from '@angular/core';
import {ButtonInterface, FooterInterface} from "../../_models/share.interface";
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {ButtonComponent} from "../button/button.component";
import {CommonModule} from "@angular/common";
import {Button} from "primeng/button";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
    ButtonComponent,
    Button
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  constructor() {
    this.currentRoute = this.router.url
  }

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

  private currentRoute!: string
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
        this.router.navigate([this.previousRoute(this.currentRoute)])
      }
    },
    {
      hasText: true,
      innerText: "مرحله بعد",
      severity: "primary",
      hasInnerText: true,
      hasIcon: true,
      iconName: "arrow-left",
      iconPos: "left",
      class: 'DDBE88 left',
      operation: () => {
        this.router.navigate([this.nexRoute(this.currentRoute)])
      }
    }
  ]

  ngOnInit() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe({
      next: (event: NavigationEnd) => {
        this.currentRoute = event.url;
      }
    })
  }
}
