import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSortComponent } from './shop-sort.component';

describe('ShopSortComponent', () => {
  let component: ShopSortComponent;
  let fixture: ComponentFixture<ShopSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
