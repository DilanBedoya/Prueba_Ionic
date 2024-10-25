import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  a: number | null = null;
  b: number | null = null;
  c: number | null = null;
  roots: { root1?: number; root2?: number; realRoots: boolean } | null = null;

  constructor() { }

  ngOnInit() { }

  calculateRoots() {
    if (this.a !== null && this.b !== null && this.c !== null) {
      const discriminant = this.b * this.b - 4 * this.a * this.c;

      if (discriminant > 0) {
        const root1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
        const root2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
        this.roots = { root1, root2, realRoots: true };
      } else if (discriminant === 0) {
        const root = -this.b / (2 * this.a);
        this.roots = { root1: root, root2: root, realRoots: true };
      } else {
        this.roots = { realRoots: false };
      }
    } else {
      this.roots = null;
    }
  }
}
