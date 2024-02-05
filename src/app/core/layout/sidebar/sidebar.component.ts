import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {
  @Input() open: boolean = true;
  isMobile: boolean = false;
  private breakpointSub!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    // Detect if the screen is mobile on initialization
    this.checkIfMobile();

    // Subscribe to breakpoint changes to update the isMobile status
    this.breakpointSub = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ])
      .pipe(debounceTime(200))
      .subscribe(state => {
        this.checkIfMobile();
      });
  }

  ngOnDestroy() {
    // Unsubscribe from the breakpoint changes to avoid memory leaks
    if (this.breakpointSub) {
      this.breakpointSub.unsubscribe();
    }
  }

  private checkIfMobile() {
    this.isMobile = this.breakpointObserver.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
  }
}
