import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalonAddPage } from './salon-add.page';

describe('SalonAddPage', () => {
  let component: SalonAddPage;
  let fixture: ComponentFixture<SalonAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalonAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalonAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
