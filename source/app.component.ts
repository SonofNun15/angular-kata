import * as angular from 'angular'

export let componentName: string = 'jgCheckoutApp'

export class AppController {
	value: number

	$onInit() {
		this.value = 5
	}

	add() {
		this.value += 5
	}
}

export let appComponentOptions: angular.IComponentOptions = {
	template: require('./app.component.html'),
	controller: AppController,
}
