import * as angular from 'angular'

import { moduleName } from './app.module'
import { AppController, componentName } from './app.component'

chai.should()

describe('AppController', () => {
	let $controller: angular.IControllerService

	beforeEach(() => {
		angular.mock.module(moduleName)

		inject((_$controller_) => {
			$controller = _$controller_
		})
	})

	it('should start with 5', () => {
		let controller = buildController()

		controller.value.should.equal(5)
	})

	it ('should add 5', () => {
		let controller = buildController()

		controller.add()
		controller.value.should.equal(10)

		controller.add()
		controller.value.should.equal(15)
	})

	function buildController() {
		let controller = $controller(AppController)
		controller.$ngInit()
		return controller
	}
})
