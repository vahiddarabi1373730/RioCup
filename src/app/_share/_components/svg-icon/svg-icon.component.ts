import {Component, inject, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent implements OnInit {
  @Input() name!: string
  protected svgIcon!: any
  private http = inject(HttpClient)
  private sanitizer = inject(DomSanitizer)

  ngOnInit() {
    this.http.get(`assets/_icons/${this.name}.svg`, {responseType: "text"}).subscribe(svg => {
      this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(svg)
    })
  }

}
