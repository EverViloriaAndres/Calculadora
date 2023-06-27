import { TestBed } from '@angular/core/testing';
import { ComponentPrincipal } from './module1.component';

describe('ComponentPrincipal', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [ComponentPrincipal],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ComponentPrincipal);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calculadora'`, () => {
    const fixture = TestBed.createComponent(ComponentPrincipal);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Calculadora');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ComponentPrincipal);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'Calculadora app is running!'
    );
  });
});
