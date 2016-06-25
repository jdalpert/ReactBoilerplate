import { expect } from '../test_helper';
import { GRAB, CHANGE, DELETE } from '../../src/actions/constants';
import { grab_data } from '../../src/actions/change_main.action';

describe("Check storage", () => {
	describe("Checking grab", () => {
		it("has the correct type", () => {
			const action = grab_data();
			expect(action.type).to.equal(GRAB);
		});
	});
});
