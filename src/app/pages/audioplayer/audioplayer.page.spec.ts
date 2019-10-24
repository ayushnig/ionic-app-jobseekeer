import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioplayerPage } from './audioplayer.page';

describe('AudioplayerPage', () => {
  let component: AudioplayerPage;
  let fixture: ComponentFixture<AudioplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioplayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
