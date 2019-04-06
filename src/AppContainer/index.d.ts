import * as android       from './App.android'
import * as ios           from './App.ios'
import * as web           from './App.web'

import DefAndroid         from './App.android'
import DefIos             from './App.ios'
import DefWeb             from './App.web'

declare var _test:        typeof web
declare var _test:        typeof android
declare var _test:        typeof ios
declare var _testDefault: typeof DefWeb
declare var _testDefault: typeof DefAndroid
declare var _testDefault: typeof DefIos

export default DefAndroid
export * from './index.android'
