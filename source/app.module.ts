import * as angular from 'angular'

import { componentName, appComponentOptions } from './app.component'

export let moduleName: string = 'jg.angular-kata'

angular.module(moduleName, [])
	.component(componentName, appComponentOptions)
