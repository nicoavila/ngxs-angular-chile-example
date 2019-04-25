import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPostsComponent } from './posts.component';

describe('NuevoPostsComponent', () => {
  let component: NuevoPostsComponent;
  let fixture: ComponentFixture<NuevoPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
