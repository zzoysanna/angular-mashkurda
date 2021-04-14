import { Directive, Output, EventEmitter, ElementRef, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Directive({
  selector: '[maObserveVisibility]'
})
export class ObserveVisibilityDirective implements OnInit, AfterViewInit {
  @Input() delay: number;
  @Input() threshold = 1;
  @Output() visible = new EventEmitter<any>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<IntersectionObserverEntry>();
  readonly element: any;

  constructor(element: ElementRef) {
    this.observer = undefined;
    this.delay = 0;
    this.element = element.nativeElement;
  }

  ngOnInit(): void {
    const isIntersecting = (entry: IntersectionObserverEntry) =>
        entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (isIntersecting(entry)) {
          this.subject$.next(entry);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: this.threshold
    });
  }

  ngAfterViewInit(): void {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element);

    this.subject$.pipe(
      delay(this.delay),
      untilDestroyed(this)
    ).subscribe((entry: IntersectionObserverEntry) => {
      const target = entry.target as HTMLElement;
      const isStillVisible = this.isVisible(target);
      if (isStillVisible) {
        this.visible.emit(target.id);
      }
    });
  }

  private isVisible(element: HTMLElement): Promise<boolean> {
    return new Promise(resolve => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio === 1);
        observer.disconnect();
      });

      observer.observe(element);
    });
  }

}
