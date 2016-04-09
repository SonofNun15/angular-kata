import * as angular from 'angular'

export let componentName: string = 'jgCheckoutApp'

export function appComponentDeclaration(): angular.IComponentOptions {
	return {
		template: require('./app.component.html')
	}
}
