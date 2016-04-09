import * as angular from 'angular'

import { componentName, appComponentDeclaration } from './app.component'

export let moduleName: string = 'jg.angular-kata'

angular.module(moduleName, [])
	.component(componentName, appComponentDeclaration)
