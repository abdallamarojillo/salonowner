import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGallaryPage } from './add-gallary.page';

describe('AddGallaryPage', () => {
  let component: AddGallaryPage;
  let fixture: ComponentFixture<AddGallaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGallaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGallaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
