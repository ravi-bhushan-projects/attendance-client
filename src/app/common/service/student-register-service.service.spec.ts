import { TestBed } from '@angular/core/testing';

import { StudentRegisterServiceService } from './student-register-service.service';

describe('StudentRegisterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRegisterServiceService = TestBed.get(StudentRegisterServiceService);
    expect(service).toBeTruthy();
  });
});
