import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should send back an error message', () => {
    expect(component.onEnter('asdf')).toContain("City is not found");
  });
  it('should send the errors status code', () => {
    expect(component.onEnter('asdf')).toContain("404");
  });
  it('should send a different error code', () => {
    expect(component.onEnter('')).toContain("400");
  });
  it('should send back Succesful', () => {
    expect(component.onEnter('London')).toContain("Succesful");
  });
});
