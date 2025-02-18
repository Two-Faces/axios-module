# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 6.0.0 (2024-01-30)


### ⚠ BREAKING CHANGES

* prefix should be set to `/api` for backward compability. refer to new docs.
* app.axios is not available anymore (without $) should always use app.$axios

### Features

* add `CancelToken` and `isCancel` to axios instance ([#292](https://github.com/nuxt-community/axios-module/issues/292)) ([474910b](https://github.com/nuxt-community/axios-module/commit/474910bd875f2d1f6bf0e39e511db87b08673cdc))
* add function helper `setBaseURL` ([#296](https://github.com/nuxt-community/axios-module/issues/296)) ([c429d55](https://github.com/nuxt-community/axios-module/commit/c429d555202620343bc79b70bad3aa61958fb368))
* add options.init ([8e0c0e8](https://github.com/nuxt-community/axios-module/commit/8e0c0e8c4c2586d74f43d5a336679e124fcd6db3)), closes [#21](https://github.com/nuxt-community/axios-module/issues/21)
* allow adding custom headers with nuxt config ([#294](https://github.com/nuxt-community/axios-module/issues/294)) ([af1e86d](https://github.com/nuxt-community/axios-module/commit/af1e86d80065951a2ea47cdb291d159bf174f73a))
* allow creating new instances ([#306](https://github.com/nuxt-community/axios-module/issues/306)) ([2ca95e5](https://github.com/nuxt-community/axios-module/commit/2ca95e58235f10b22317a7c3d53d539d8006f528))
* allow disable progress per request. closes [#112](https://github.com/nuxt-community/axios-module/issues/112). ([1530bb6](https://github.com/nuxt-community/axios-module/commit/1530bb67670f7bb06ce627f6783b6bcaa598eabc))
* better baseURL message ([61432a1](https://github.com/nuxt-community/axios-module/commit/61432a19163dcd6fc6330919fff1156f9b69f124))
* CLI improvements ([481e6da](https://github.com/nuxt-community/axios-module/commit/481e6da8ec4b28041d755fdd4ca1a404dc6ed89f))
* consola integration ([4ec3b5d](https://github.com/nuxt-community/axios-module/commit/4ec3b5dd0f15147ed8d5e0c5f11791b9a3f8a6b6))
* convert header names to lowercase (nuxt/http[#45](https://github.com/nuxt-community/axios-module/issues/45)) ([2e514a4](https://github.com/nuxt-community/axios-module/commit/2e514a44b832c5de61f656ed91713b57d0a017eb))
* disable https for localhost url ([#93](https://github.com/nuxt-community/axios-module/issues/93)) ([dd67734](https://github.com/nuxt-community/axios-module/commit/dd677341a6425899ad1af0fe2f8f38f7527b746f))
* disable sefault error handler ([#44](https://github.com/nuxt-community/axios-module/issues/44)) ([f1e95ff](https://github.com/nuxt-community/axios-module/commit/f1e95ff4b57caba6088e14cdc7f628f71f5a11b9))
* don't rely on hostname for default values ([dadd7d8](https://github.com/nuxt-community/axios-module/commit/dadd7d8e2be79d39f847716abe9d26fd6bfc7501))
* experimental runtimeConfig support ([07ca13c](https://github.com/nuxt-community/axios-module/commit/07ca13c58194c8c48a61896a07505a936c26eb93))
* https detection ([#260](https://github.com/nuxt-community/axios-module/issues/260)) ([953ab8c](https://github.com/nuxt-community/axios-module/commit/953ab8c4619dd180208624bc870f19f56001ba72))
* https option ([#57](https://github.com/nuxt-community/axios-module/issues/57)) ([9ecb547](https://github.com/nuxt-community/axios-module/commit/9ecb547f51a0542268b290c787f8c1934558124b))
* integrate with nuxt progress bar ([41a0964](https://github.com/nuxt-community/axios-module/commit/41a0964b7ec8a26f8f82f1604eb7a89a0d50aae0))
* interceptor helpers ([fa3eb47](https://github.com/nuxt-community/axios-module/commit/fa3eb473b50df3e455b01d48fb78a3a622184f88))
* pass ctx to errorHandlers ([c70749a](https://github.com/nuxt-community/axios-module/commit/c70749a6c51b3506567820fde4edbfe2f7a5e797)), closes [#25](https://github.com/nuxt-community/axios-module/issues/25)
* passing options via proxy option ([a923db3](https://github.com/nuxt-community/axios-module/commit/a923db3b3071329f6b8d20e8feb080ea2a9a7096))
* **plugin:** enable server brotli if supported (closes [#276](https://github.com/nuxt-community/axios-module/issues/276)) ([074f98c](https://github.com/nuxt-community/axios-module/commit/074f98cbdf409473357b2cd24cd6cb13fe75f149))
* **plugin:** support runtimeConfig ([#387](https://github.com/nuxt-community/axios-module/issues/387)) ([351ea5e](https://github.com/nuxt-community/axios-module/commit/351ea5ee459eea53b9124de75ebfa7674d7ccd40))
* **proxyHeader:** proxyHeadersIgnore option ([7c13655](https://github.com/nuxt-community/axios-module/commit/7c13655ef4e954324262109431fe2ff5cbd053ff)), closes [#39](https://github.com/nuxt-community/axios-module/issues/39)
* responseInterceptor and errorHandler ([b16d6bf](https://github.com/nuxt-community/axios-module/commit/b16d6bf8a3b8bd5f919674d9e65f9a256cc354d9))
* rewrite plugin ([647b58f](https://github.com/nuxt-community/axios-module/commit/647b58f1330170ae051a63f1ef9848d06f05978f))
* support baseUrl and browserBaseUrl to handle casing typos ([8904847](https://github.com/nuxt-community/axios-module/commit/890484755c1897da8dd80c155fba2328c05f58f8))
* support proxy ([0d3be17](https://github.com/nuxt-community/axios-module/commit/0d3be173f2eb98910a6826788530893e837ccd38))
* support retry with axios-retry ([7221cac](https://github.com/nuxt-community/axios-module/commit/7221cacb379f1375b42174c41b1872c24d52d694)), closes [#77](https://github.com/nuxt-community/axios-module/issues/77)
* **types:** add Context interface ([7f8952a](https://github.com/nuxt-community/axios-module/commit/7f8952aa08e1fb3dcf283eaba2e6ccb63b21d99f))
* **types:** add types for helper functions ([#193](https://github.com/nuxt-community/axios-module/issues/193)) ([79909cc](https://github.com/nuxt-community/axios-module/commit/79909cc3ba72e7367c06bb60b48b36b029011c07))
* **types:** provide nuxt 2.9 compatible types ([#277](https://github.com/nuxt-community/axios-module/issues/277)) ([7aee77b](https://github.com/nuxt-community/axios-module/commit/7aee77b6fbe53374b2e63bd4e49b97cb2df92a85))
* upgrade for nuxt rc8 ([a341185](https://github.com/nuxt-community/axios-module/commit/a341185f5bd951d6112e11dfd49724d032cb1668))
* use `server` of nuxt.config.js to set default baseURL ([#245](https://github.com/nuxt-community/axios-module/issues/245)) ([e1120a9](https://github.com/nuxt-community/axios-module/commit/e1120a9aaf2874a4b1517b0efff71d509690ec15))


### Bug Fixes

* `$loading().set(Infinity)` issue ([#424](https://github.com/nuxt-community/axios-module/issues/424)) ([7b32262](https://github.com/nuxt-community/axios-module/commit/7b322620f1349e393338fbd7388b92b0e9275fba))
* `build.transpile` guard for nuxt@1.x (fixes [#498](https://github.com/nuxt-community/axios-module/issues/498)) ([66d56ab](https://github.com/nuxt-community/axios-module/commit/66d56ab8adbb50b470bc298d27bcd1a6820ab958))
* add `x-forwarded-host` to `proxyHeaderIgnore` defaults ([#462](https://github.com/nuxt-community/axios-module/issues/462)) ([433548b](https://github.com/nuxt-community/axios-module/commit/433548b1ca0e3ad22b9237add9093501fb2f7bfb)), closes [#456](https://github.com/nuxt-community/axios-module/issues/456)
* add `x-forwarded-port` and `x-forwarded-proto` to `proxyHeaderIgnore` defaults ([#465](https://github.com/nuxt-community/axios-module/issues/465)) ([a1a1894](https://github.com/nuxt-community/axios-module/commit/a1a189486d63356433c939529d6e631f3fc9f923))
* bump axios to ^0.19.0 ([ee8f999](https://github.com/nuxt-community/axios-module/commit/ee8f999fe1fa2605bb53b398911c5df161a8f459))
* correctly ignore brotli encoding on server-side ([#180](https://github.com/nuxt-community/axios-module/issues/180)) ([4a52bfd](https://github.com/nuxt-community/axios-module/commit/4a52bfdc81ad0f82b142b226bc6026d67e56b5c6))
* create fresh objects for all default header scopes ([7ba3ae8](https://github.com/nuxt-community/axios-module/commit/7ba3ae819d6ae0024b1a5a74a75f45e0149812b6))
* **defaults:** ignore `cf-ray` and `cf-connecting-ip` headers on server side ([#20](https://github.com/nuxt-community/axios-module/issues/20)) ([#175](https://github.com/nuxt-community/axios-module/issues/175)) ([3ae5416](https://github.com/nuxt-community/axios-module/commit/3ae5416732af2f60437966baf7900a36c4ab4441))
* **defaults:** set proper Accept-Encoding for server side ([#176](https://github.com/nuxt-community/axios-module/issues/176)) ([c84fb56](https://github.com/nuxt-community/axios-module/commit/c84fb56f20627e048ef88905a7b1875f67d71d2d))
* delete accept header ([2f04e30](https://github.com/nuxt-community/axios-module/commit/2f04e3020f002f3336a74a4fa5ccb3b5cd8d2032)), closes [#12](https://github.com/nuxt-community/axios-module/issues/12)
* **docs:** should be response.code instead of code ([#197](https://github.com/nuxt-community/axios-module/issues/197)) ([d07102e](https://github.com/nuxt-community/axios-module/commit/d07102e51f9089988ba2b0184dd442ad4fc9d46a))
* don't mutate env.API_URL ([a8ea331](https://github.com/nuxt-community/axios-module/commit/a8ea331afc5c8d2aaee98a30db84297d7e7e0a8e))
* don't toLowerCase headers for `setHeader` and `setToken` ([#250](https://github.com/nuxt-community/axios-module/issues/250)) ([93469f0](https://github.com/nuxt-community/axios-module/commit/93469f026ee0ad4d1e3946a793db611153198df0))
* fix netlify.toml ([3a2e427](https://github.com/nuxt-community/axios-module/commit/3a2e427a3e85e8180cfdbf48b435cd9600917d88))
* globalName fallback for nuxt < 2.2.0 ([12da6c8](https://github.com/nuxt-community/axios-module/commit/12da6c8e2feb8cf4f7e918fbbe4693400152c1ff))
* **headers:** don't proxy `content-md5` and `content-type` ([#300](https://github.com/nuxt-community/axios-module/issues/300)) ([46c49e2](https://github.com/nuxt-community/axios-module/commit/46c49e253cb23ffc1cf92ad02a1ab1fc24034906))
* **headers:** fix security bug with default request headers ([9355228](https://github.com/nuxt-community/axios-module/commit/935522853674bd986380eb754b532da2dc94dcc7))
* ignore content-length header ([41ff27a](https://github.com/nuxt-community/axios-module/commit/41ff27a917685fce76e5ff326784dc95cc6fdd72))
* inject $axios in current ctx ([356b31f](https://github.com/nuxt-community/axios-module/commit/356b31f0323f018370f36a5d38f35f0be70bfaa6)), closes [#18](https://github.com/nuxt-community/axios-module/issues/18)
* link to the proxy page ([5449939](https://github.com/nuxt-community/axios-module/commit/54499392089bcf1ad66dde8afdf405231e5fbcb3))
* lowercase `accept-encoding` header (nuxt/http[#43](https://github.com/nuxt-community/axios-module/issues/43)) ([c17fec2](https://github.com/nuxt-community/axios-module/commit/c17fec2db627442c41a806886293de8d484308cd))
* **module:** always set protocol to `https` when `https: true` is set ([#344](https://github.com/nuxt-community/axios-module/issues/344)) ([6f82570](https://github.com/nuxt-community/axios-module/commit/6f82570b163c4d4635321601f05d0c4641a00f19))
* **module:** browserBaseURL as empty string (fixes [#303](https://github.com/nuxt-community/axios-module/issues/303)) ([18afe5c](https://github.com/nuxt-community/axios-module/commit/18afe5c1a9aac6380bdd5ffb337a0968a6d504aa))
* only transpile defu for client bundle (resolves [#501](https://github.com/nuxt-community/axios-module/issues/501)) ([ec2eb0a](https://github.com/nuxt-community/axios-module/commit/ec2eb0ae8642aaa3f3e51505f4ec86b699d09d90))
* **package:** add missing types from index.d.ts ([3a06503](https://github.com/nuxt-community/axios-module/commit/3a065038124e5b3407ab7db4c32a8b1ca7e3a5c2))
* **package:** make nuxt devDependency ([a36a886](https://github.com/nuxt-community/axios-module/commit/a36a886a77a5566e5b676dd18a6f91cde923786b))
* **package:** require @nuxtjs/proxy as a peerDependency ([fd1ef47](https://github.com/nuxt-community/axios-module/commit/fd1ef478feadeb30cdcc4e68396e1a2500f00155))
* **plugin:** add missing $ prefix to globalName ([#356](https://github.com/nuxt-community/axios-module/issues/356)) ([47788bd](https://github.com/nuxt-community/axios-module/commit/47788bdd0384807c9d63aa3caa7f2031f44d4c96))
* **plugin:** always get global `$nuxt` while loading ([#364](https://github.com/nuxt-community/axios-module/issues/364)) ([e848b9d](https://github.com/nuxt-community/axios-module/commit/e848b9d0b0a1804388eb51d328ab6054d89aa979))
* **plugin:** don't convert falsy urls to string ([#347](https://github.com/nuxt-community/axios-module/issues/347)) ([b8a510e](https://github.com/nuxt-community/axios-module/commit/b8a510ee989fabf10d93d99a7ae1e17c0fc3eca0))
* **plugin:** hide progress-bar on cancelled requests ([#398](https://github.com/nuxt-community/axios-module/issues/398)) ([2061721](https://github.com/nuxt-community/axios-module/commit/206172133e8cf3e8dc4f28efe34da695f2cb64f4))
* **plugin:** preserve default headers (fixes [#323](https://github.com/nuxt-community/axios-module/issues/323)) ([6c5605d](https://github.com/nuxt-community/axios-module/commit/6c5605df0b77e9e4df32ad1eaecb2eac60eb1c1d))
* **plugin:** use `globalName` instead of  `$nuxt` (fixes [#345](https://github.com/nuxt-community/axios-module/issues/345)) ([fd1f8ec](https://github.com/nuxt-community/axios-module/commit/fd1f8ec17160f6e88610e3dfa2153423b3140592))
* preserve default headers with custom headers ([#452](https://github.com/nuxt-community/axios-module/issues/452)) ([55f994f](https://github.com/nuxt-community/axios-module/commit/55f994f1627798f36174a14edd28fe7a5e4e70e7))
* **progress:** ensure $loading is valid ([cbdc586](https://github.com/nuxt-community/axios-module/commit/cbdc586c0c08def04032deb0c8e696c3c140fca8))
* **progress:** finish on fail ([ea7b569](https://github.com/nuxt-community/axios-module/commit/ea7b569d30829c762fb97e3a015ec89a7b8aaac4))
* **progress:** handle canceled requests ([#301](https://github.com/nuxt-community/axios-module/issues/301)) ([2903fd5](https://github.com/nuxt-community/axios-module/commit/2903fd579fe5deed693b26660a687089a589ebdf))
* **progress:** handle division by zero ([#117](https://github.com/nuxt-community/axios-module/issues/117)) ([040eaf7](https://github.com/nuxt-community/axios-module/commit/040eaf74109c1f5d1e7c89e99f7d959491a79701)), closes [#166](https://github.com/nuxt-community/axios-module/issues/166)
* **progress:** onProgress when currentRequests is zero ([#118](https://github.com/nuxt-community/axios-module/issues/118)) ([a90236e](https://github.com/nuxt-community/axios-module/commit/a90236edd018a74e51f0ce330c108b935c01dcc4))
* setHeader function returns after the first scope element ([#507](https://github.com/nuxt-community/axios-module/issues/507)) ([cb5e29d](https://github.com/nuxt-community/axios-module/commit/cb5e29dc61a22c6b45b90c245552f1fa2cb5719b))
* support dynamic API_URL for SSR ([ea4882a](https://github.com/nuxt-community/axios-module/commit/ea4882a52f72da4b3af00b70cd4d50e4eea52a46))
* transpile defu ([cf1a03f](https://github.com/nuxt-community/axios-module/commit/cf1a03f99a2591bd60160292864b7e16f86eb5cf)), closes [unjs/defu#28](https://github.com/unjs/defu/issues/28)
* **types:** `onResponseError` typo ([#203](https://github.com/nuxt-community/axios-module/issues/203)) ([5fc1441](https://github.com/nuxt-community/axios-module/commit/5fc1441ab73f169db16c3a4beb4b1696e8964869))
* **types:** add `setBaseURL` ([#329](https://github.com/nuxt-community/axios-module/issues/329)) ([9d00d6a](https://github.com/nuxt-community/axios-module/commit/9d00d6a9b5e21396d3b195f824dd2cfe99ca9012))
* **types:** add axios-retry type def for more options ([#378](https://github.com/nuxt-community/axios-module/issues/378)) ([40a0c58](https://github.com/nuxt-community/axios-module/commit/40a0c5885819406fec88b212f0219539fbc0d229))
* **types:** add AxiosError interface ([efb7191](https://github.com/nuxt-community/axios-module/commit/efb71913589667d2d4ffc9b8653d1ceefe303e29))
* **types:** add missing type for `create()` ([#475](https://github.com/nuxt-community/axios-module/issues/475)) ([62f17ca](https://github.com/nuxt-community/axios-module/commit/62f17ca2ba005a74762f67b004ebcc7b612425ac))
* **types:** add prefix, port, host options to axios types ([#381](https://github.com/nuxt-community/axios-module/issues/381)) ([301805b](https://github.com/nuxt-community/axios-module/commit/301805b5eade85ff30f80e9f34341d586a056d8b))
* **types:** correct Vuex Store instance ([#227](https://github.com/nuxt-community/axios-module/issues/227)) ([e5747eb](https://github.com/nuxt-community/axios-module/commit/e5747ebb275be56cb4496771911419038952bf4b))
* **types:** correct Vuex Store instance ([#227](https://github.com/nuxt-community/axios-module/issues/227)) ([1ed6e2f](https://github.com/nuxt-community/axios-module/commit/1ed6e2ffef6ac91fd2fdd4f4cbdfface8da1b2f4))
* **types:** extend Axios.AxiosRequestConfig with "progress" option ([#408](https://github.com/nuxt-community/axios-module/issues/408)) ([ea4ea7e](https://github.com/nuxt-community/axios-module/commit/ea4ea7e323e053d6ae025210534c675e468a273c))
* **types:** extend from `AxiosStatic` ([#319](https://github.com/nuxt-community/axios-module/issues/319)) ([9223a57](https://github.com/nuxt-community/axios-module/commit/9223a57c7ac65b2c414858360126d23bf60f9c82))
* **types:** move types in types folder ([deb2834](https://github.com/nuxt-community/axios-module/commit/deb28345060717a07677f34ed268f408b27f9887))
* **types:** replace AxiosPromise to Promise ([#162](https://github.com/nuxt-community/axios-module/issues/162)) ([5fd9214](https://github.com/nuxt-community/axios-module/commit/5fd921489ede346711efbb6d67bc4b5193f14d4a))
* **types:** update interceptors type ([#476](https://github.com/nuxt-community/axios-module/issues/476)) ([ecfab9a](https://github.com/nuxt-community/axios-module/commit/ecfab9a7cf655737af46dd02ba013c5600b81e82))
* use `Axios` for  `isCancel` (fixes [#301](https://github.com/nuxt-community/axios-module/issues/301)) ([4f71479](https://github.com/nuxt-community/axios-module/commit/4f714791b564b91b915c107299bb3ffecc3a482b))
* vuex typescript type ([#253](https://github.com/nuxt-community/axios-module/issues/253)) ([9205fdf](https://github.com/nuxt-community/axios-module/commit/9205fdf0381eff052388331c13ff774666627bc5))


* a better and more stable way to specify baseURL and browserBaseURL options ([533cf4e](https://github.com/nuxt-community/axios-module/commit/533cf4ee2c2ed179e1503f08e83653f49ff0b2aa))

### [5.13.6](https://github.com/nuxt-community/axios-module/compare/v5.13.5...v5.13.6) (2021-06-02)


### Bug Fixes

* setHeader function returns after the first scope element ([#507](https://github.com/nuxt-community/axios-module/issues/507)) ([cb5e29d](https://github.com/nuxt-community/axios-module/commit/cb5e29dc61a22c6b45b90c245552f1fa2cb5719b))

### [5.13.5](https://github.com/nuxt-community/axios-module/compare/v5.13.4...v5.13.5) (2021-05-26)


### Bug Fixes

* only transpile defu for client bundle (resolves [#501](https://github.com/nuxt-community/axios-module/issues/501)) ([ec2eb0a](https://github.com/nuxt-community/axios-module/commit/ec2eb0ae8642aaa3f3e51505f4ec86b699d09d90))

### [5.13.4](https://github.com/nuxt-community/axios-module/compare/v5.13.3...v5.13.4) (2021-05-18)


### Bug Fixes

* `build.transpile` guard for nuxt@1.x (fixes [#498](https://github.com/nuxt-community/axios-module/issues/498)) ([66d56ab](https://github.com/nuxt-community/axios-module/commit/66d56ab8adbb50b470bc298d27bcd1a6820ab958))

### [5.13.3](https://github.com/nuxt-community/axios-module/compare/v5.13.2...v5.13.3) (2021-05-17)


### Bug Fixes

* transpile defu ([cf1a03f](https://github.com/nuxt-community/axios-module/commit/cf1a03f99a2591bd60160292864b7e16f86eb5cf)), closes [unjs/defu#28](https://github.com/unjs/defu/issues/28)

### [5.13.2](https://github.com/nuxt-community/axios-module/compare/v5.13.1...v5.13.2) (2021-05-17)

### [5.13.1](https://github.com/nuxt-community/axios-module/compare/v5.13.0...v5.13.1) (2021-02-08)


### Bug Fixes

* **types:** add missing type for `create()` ([#475](https://github.com/nuxt-community/axios-module/issues/475)) ([62f17ca](https://github.com/nuxt-community/axios-module/commit/62f17ca2ba005a74762f67b004ebcc7b612425ac))
* **types:** update interceptors type ([#476](https://github.com/nuxt-community/axios-module/issues/476)) ([ecfab9a](https://github.com/nuxt-community/axios-module/commit/ecfab9a7cf655737af46dd02ba013c5600b81e82))

## [5.13.0](https://github.com/nuxt-community/axios-module/compare/v5.12.5...v5.13.0) (2021-02-01)


### Features

* support baseUrl and browserBaseUrl to handle casing typos ([8904847](https://github.com/nuxt-community/axios-module/commit/890484755c1897da8dd80c155fba2328c05f58f8))


### Bug Fixes

* add `x-forwarded-port` and `x-forwarded-proto` to `proxyHeaderIgnore` defaults ([#465](https://github.com/nuxt-community/axios-module/issues/465)) ([a1a1894](https://github.com/nuxt-community/axios-module/commit/a1a189486d63356433c939529d6e631f3fc9f923))

### [5.12.5](https://github.com/nuxt-community/axios-module/compare/v5.12.4...v5.12.5) (2021-01-04)


### Bug Fixes

* add `x-forwarded-host` to `proxyHeaderIgnore` defaults ([#462](https://github.com/nuxt-community/axios-module/issues/462)) ([433548b](https://github.com/nuxt-community/axios-module/commit/433548b1ca0e3ad22b9237add9093501fb2f7bfb)), closes [#456](https://github.com/nuxt-community/axios-module/issues/456)

### [5.12.4](https://github.com/nuxt-community/axios-module/compare/v5.12.3...v5.12.4) (2020-12-14)


### Bug Fixes

* preserve default headers with custom headers ([#452](https://github.com/nuxt-community/axios-module/issues/452)) ([55f994f](https://github.com/nuxt-community/axios-module/commit/55f994f1627798f36174a14edd28fe7a5e4e70e7))

### [5.12.3](https://github.com/nuxt-community/axios-module/compare/v5.12.2...v5.12.3) (2020-11-30)


### Bug Fixes

* `$loading().set(Infinity)` issue ([#424](https://github.com/nuxt-community/axios-module/issues/424)) ([7b32262](https://github.com/nuxt-community/axios-module/commit/7b322620f1349e393338fbd7388b92b0e9275fba))

### [5.12.2](https://github.com/nuxt-community/axios-module/compare/v5.12.1...v5.12.2) (2020-08-25)


### Bug Fixes

* **types:** extend Axios.AxiosRequestConfig with "progress" option ([#408](https://github.com/nuxt-community/axios-module/issues/408)) ([ea4ea7e](https://github.com/nuxt-community/axios-module/commit/ea4ea7e323e053d6ae025210534c675e468a273c))

### Docs

* Migrate docs to nuxt/content ([#404](https://github.com/nuxt-community/axios-module/pull/404))

### [5.12.1](https://github.com/nuxt-community/axios-module/compare/v5.12.0...v5.12.1) (2020-08-05)


### Bug Fixes

* **plugin:** hide progress-bar on cancelled requests ([#398](https://github.com/nuxt-community/axios-module/issues/398)) ([2061721](https://github.com/nuxt-community/axios-module/commit/206172133e8cf3e8dc4f28efe34da695f2cb64f4))

## [5.12.0](https://github.com/nuxt-community/axios-module/compare/v5.11.0...v5.12.0) (2020-07-10)


### Features

* **plugin:** support runtimeConfig ([#387](https://github.com/nuxt-community/axios-module/issues/387)) ([351ea5e](https://github.com/nuxt-community/axios-module/commit/351ea5ee459eea53b9124de75ebfa7674d7ccd40))


### Bug Fixes

* **types:** add axios-retry type def for more options ([#378](https://github.com/nuxt-community/axios-module/issues/378)) ([40a0c58](https://github.com/nuxt-community/axios-module/commit/40a0c5885819406fec88b212f0219539fbc0d229))
* **types:** add prefix, port, host options to axios types ([#381](https://github.com/nuxt-community/axios-module/issues/381)) ([301805b](https://github.com/nuxt-community/axios-module/commit/301805b5eade85ff30f80e9f34341d586a056d8b))

## [5.11.0](https://github.com/nuxt-community/axios-module/compare/v5.10.3...v5.11.0) (2020-06-05)


### Features

* experimental runtimeConfig support ([07ca13c](https://github.com/nuxt-community/axios-module/commit/07ca13c58194c8c48a61896a07505a936c26eb93))


### Bug Fixes

* **plugin:** always get global `$nuxt` while loading ([#364](https://github.com/nuxt-community/axios-module/issues/364)) ([e848b9d](https://github.com/nuxt-community/axios-module/commit/e848b9d0b0a1804388eb51d328ab6054d89aa979))

### [5.10.3](https://github.com/nuxt-community/axios-module/compare/v5.10.2...v5.10.3) (2020-04-30)


### Bug Fixes

* globalName fallback for nuxt < 2.2.0 ([12da6c8](https://github.com/nuxt-community/axios-module/commit/12da6c8e2feb8cf4f7e918fbbe4693400152c1ff))

### [5.10.2](https://github.com/nuxt-community/axios-module/compare/v5.10.1...v5.10.2) (2020-04-27)


### Bug Fixes

* **plugin:** add missing $ prefix to globalName ([#356](https://github.com/nuxt-community/axios-module/issues/356)) ([47788bd](https://github.com/nuxt-community/axios-module/commit/47788bdd0384807c9d63aa3caa7f2031f44d4c96))

### [5.10.1](https://github.com/nuxt-community/axios-module/compare/v5.10.0...v5.10.1) (2020-04-22)

## [5.10.0](https://github.com/nuxt-community/axios-module/compare/v5.9.7...v5.10.0) (2020-04-21)


### Features

* **plugin:** enable server brotli if supported (closes [#276](https://github.com/nuxt-community/axios-module/issues/276)) ([074f98c](https://github.com/nuxt-community/axios-module/commit/074f98cbdf409473357b2cd24cd6cb13fe75f149))


### Bug Fixes

* **module:** browserBaseURL as empty string (fixes [#303](https://github.com/nuxt-community/axios-module/issues/303)) ([18afe5c](https://github.com/nuxt-community/axios-module/commit/18afe5c1a9aac6380bdd5ffb337a0968a6d504aa))
* **plugin:** preserve default headers (fixes [#323](https://github.com/nuxt-community/axios-module/issues/323)) ([6c5605d](https://github.com/nuxt-community/axios-module/commit/6c5605df0b77e9e4df32ad1eaecb2eac60eb1c1d))
* **plugin:** use `globalName` instead of  `$nuxt` (fixes [#345](https://github.com/nuxt-community/axios-module/issues/345)) ([fd1f8ec](https://github.com/nuxt-community/axios-module/commit/fd1f8ec17160f6e88610e3dfa2153423b3140592))

### [5.9.7](https://github.com/nuxt-community/axios-module/compare/v5.9.6...v5.9.7) (2020-03-30)


### Bug Fixes

* **plugin:** don't convert falsy urls to string ([#347](https://github.com/nuxt-community/axios-module/issues/347)) ([b8a510e](https://github.com/nuxt-community/axios-module/commit/b8a510ee989fabf10d93d99a7ae1e17c0fc3eca0))

### [5.9.6](https://github.com/nuxt-community/axios-module/compare/v5.9.5...v5.9.6) (2020-03-27)


### Bug Fixes

* **module:** always set protocol to `https` when `https: true` is set ([#344](https://github.com/nuxt-community/axios-module/issues/344)) ([6f82570](https://github.com/nuxt-community/axios-module/commit/6f82570b163c4d4635321601f05d0c4641a00f19))

### [5.9.5](https://github.com/nuxt-community/axios-module/compare/v5.9.3...v5.9.5) (2020-02-02)


### Bug Fixes

* **types:** add `setBaseURL` ([#329](https://github.com/nuxt-community/axios-module/issues/329)) ([9d00d6a](https://github.com/nuxt-community/axios-module/commit/9d00d6a9b5e21396d3b195f824dd2cfe99ca9012))

### [5.9.4](https://github.com/nuxt-community/axios-module/compare/v5.9.3...v5.9.4) (2020-01-30)


### Bug Fixes

* **types:** add `setBaseURL` ([#329](https://github.com/nuxt-community/axios-module/issues/329)) ([9d00d6a](https://github.com/nuxt-community/axios-module/commit/9d00d6a9b5e21396d3b195f824dd2cfe99ca9012))

### [5.9.3](https://github.com/nuxt-community/axios-module/compare/v5.9.2...v5.9.3) (2020-01-11)


### Bug Fixes

* **types:** extend from `AxiosStatic` ([#319](https://github.com/nuxt-community/axios-module/issues/319)) ([9223a57](https://github.com/nuxt-community/axios-module/commit/9223a57c7ac65b2c414858360126d23bf60f9c82))

### [5.9.2](https://github.com/nuxt-community/axios-module/compare/v5.9.1...v5.9.2) (2020-01-02)

### [5.9.1](https://github.com/nuxt-community/axios-module/compare/v5.9.0...v5.9.1) (2020-01-02)

## [5.9.0](https://github.com/nuxt-community/axios-module/compare/v5.6.0...v5.9.0) (2019-12-17)


### Features

* add `CancelToken` and `isCancel` to axios instance ([#292](https://github.com/nuxt-community/axios-module/issues/292)) ([474910b](https://github.com/nuxt-community/axios-module/commit/474910bd875f2d1f6bf0e39e511db87b08673cdc))
* add function helper `setBaseURL` ([#296](https://github.com/nuxt-community/axios-module/issues/296)) ([c429d55](https://github.com/nuxt-community/axios-module/commit/c429d555202620343bc79b70bad3aa61958fb368))
* allow adding custom headers with nuxt config ([#294](https://github.com/nuxt-community/axios-module/issues/294)) ([af1e86d](https://github.com/nuxt-community/axios-module/commit/af1e86d80065951a2ea47cdb291d159bf174f73a))
* allow creating new instances ([#306](https://github.com/nuxt-community/axios-module/issues/306)) ([2ca95e5](https://github.com/nuxt-community/axios-module/commit/2ca95e58235f10b22317a7c3d53d539d8006f528))


### Bug Fixes

* **docs:** should be response.code instead of code ([#197](https://github.com/nuxt-community/axios-module/issues/197)) ([d07102e](https://github.com/nuxt-community/axios-module/commit/d07102e51f9089988ba2b0184dd442ad4fc9d46a))
* **headers:** don't proxy `content-md5` and `content-type` ([#300](https://github.com/nuxt-community/axios-module/issues/300)) ([46c49e2](https://github.com/nuxt-community/axios-module/commit/46c49e253cb23ffc1cf92ad02a1ab1fc24034906))
* **progress:** handle canceled requests ([#301](https://github.com/nuxt-community/axios-module/issues/301)) ([2903fd5](https://github.com/nuxt-community/axios-module/commit/2903fd579fe5deed693b26660a687089a589ebdf))
* **types:** correct Vuex Store instance ([#227](https://github.com/nuxt-community/axios-module/issues/227)) ([e5747eb](https://github.com/nuxt-community/axios-module/commit/e5747ebb275be56cb4496771911419038952bf4b))
* use `Axios` for  `isCancel` (fixes [#301](https://github.com/nuxt-community/axios-module/issues/301)) ([4f71479](https://github.com/nuxt-community/axios-module/commit/4f714791b564b91b915c107299bb3ffecc3a482b))

## [5.8.0](https://github.com/nuxt-community/axios-module/compare/v5.7.1...v5.8.0) (2019-10-23)


### Features

* add `CancelToken` and `isCancel` to axios instance ([#292](https://github.com/nuxt-community/axios-module/issues/292)) ([b9335b1](https://github.com/nuxt-community/axios-module/commit/b9335b1c55b3af34e2d6e5897fedb8372a620ce4))

### [5.7.1](https://github.com/nuxt-community/axios-module/compare/v5.7.0...v5.7.1) (2019-10-22)


### Bug Fixes

* use `Axios` for  `isCancel` (fixes [#301](https://github.com/nuxt-community/axios-module/issues/301)) ([82dfccc](https://github.com/nuxt-community/axios-module/commit/82dfccce409e918a91e498af1340408dc0892bf5))

## [5.7.0](https://github.com/nuxt-community/axios-module/compare/v5.6.0...v5.7.0) (2019-10-22)


### Features

* add function helper `setBaseURL` ([#296](https://github.com/nuxt-community/axios-module/issues/296)) ([1028bbc](https://github.com/nuxt-community/axios-module/commit/1028bbcaf2d1a29a33949f05aeb9d519c30b246e))
* allow adding custom headers with nuxt config ([#294](https://github.com/nuxt-community/axios-module/issues/294)) ([3e38906](https://github.com/nuxt-community/axios-module/commit/3e3890616a5ac3eb34b07ec476313bb648aca59a))


### Bug Fixes

* **headers:** don't proxy `content-md5` and `content-type` ([#300](https://github.com/nuxt-community/axios-module/issues/300)) ([f959c58](https://github.com/nuxt-community/axios-module/commit/f959c585254029ac8d623d1472b883022ab115e2))
* **progress:** handle canceled requests ([#301](https://github.com/nuxt-community/axios-module/issues/301)) ([5096060](https://github.com/nuxt-community/axios-module/commit/50960609d913d059758658aa88434bd28faa0c47))

## [5.6.0](https://github.com/nuxt-community/axios-module/compare/v5.5.4...v5.6.0) (2019-08-20)


### Features

* **types:** provide nuxt 2.9 compatible types ([#277](https://github.com/nuxt-community/axios-module/issues/277)) ([7aee77b](https://github.com/nuxt-community/axios-module/commit/7aee77b))
* https detection ([#260](https://github.com/nuxt-community/axios-module/issues/260)) ([953ab8c](https://github.com/nuxt-community/axios-module/commit/953ab8c))



### [5.5.4](https://github.com/nuxt-community/axios-module/compare/v5.5.3...v5.5.4) (2019-06-05)


### Bug Fixes

* ignore content-length header ([41ff27a](https://github.com/nuxt-community/axios-module/commit/41ff27a))



### [5.5.3](https://github.com/nuxt-community/axios-module/compare/v5.5.2...v5.5.3) (2019-05-30)


### Bug Fixes

* bump axios to ^0.19.0 ([ee8f999](https://github.com/nuxt-community/axios-module/commit/ee8f999))



## [5.5.2](https://github.com/nuxt-community/axios-module/compare/v5.5.1...v5.5.2) (2019-05-26)


### Bug Fixes

* vuex typescript type ([#253](https://github.com/nuxt-community/axios-module/issues/253)) ([9205fdf](https://github.com/nuxt-community/axios-module/commit/9205fdf))



## [5.5.1](https://github.com/nuxt-community/axios-module/compare/v5.5.0...v5.5.1) (2019-05-23)


### Bug Fixes

* don't toLowerCase headers for `setHeader` and `setToken` ([#250](https://github.com/nuxt-community/axios-module/issues/250)) ([93469f0](https://github.com/nuxt-community/axios-module/commit/93469f0))



# [5.5.0](https://github.com/nuxt-community/axios-module/compare/v5.4.2...v5.5.0) (2019-05-22)


### Bug Fixes

* lowercase `accept-encoding` header (nuxt/http[#43](https://github.com/nuxt-community/axios-module/issues/43)) ([c17fec2](https://github.com/nuxt-community/axios-module/commit/c17fec2))


### Features

* convert header names to lowercase (nuxt/http[#45](https://github.com/nuxt-community/axios-module/issues/45)) ([2e514a4](https://github.com/nuxt-community/axios-module/commit/2e514a4))
* use `server` of nuxt.config.js to set default baseURL ([#245](https://github.com/nuxt-community/axios-module/issues/245)) ([e1120a9](https://github.com/nuxt-community/axios-module/commit/e1120a9))



## [5.4.1](https://github.com/nuxt-community/axios-module/compare/v5.4.0...v5.4.1) (2019-03-05)


### Bug Fixes

* **types:** correct Vuex Store instance ([#227](https://github.com/nuxt-community/axios-module/issues/227)) ([1ed6e2f](https://github.com/nuxt-community/axios-module/commit/1ed6e2f))



# [5.4.0](https://github.com/nuxt-community/axios-module/compare/v5.3.6...v5.4.0) (2019-03-02)


### Bug Fixes

* **types:** `onResponseError` typo ([#203](https://github.com/nuxt-community/axios-module/issues/203)) ([5fc1441](https://github.com/nuxt-community/axios-module/commit/5fc1441))
* **types:** add AxiosError interface ([efb7191](https://github.com/nuxt-community/axios-module/commit/efb7191))
* **types:** move types in types folder ([deb2834](https://github.com/nuxt-community/axios-module/commit/deb2834))


### Features

* **types:** add Context interface ([7f8952a](https://github.com/nuxt-community/axios-module/commit/7f8952a))
* **types:** add types for helper functions ([#193](https://github.com/nuxt-community/axios-module/issues/193)) ([79909cc](https://github.com/nuxt-community/axios-module/commit/79909cc))



<a name="5.3.6"></a>
## [5.3.6](https://github.com/nuxt-community/axios-module/compare/v5.3.5...v5.3.6) (2018-11-08)


### Bug Fixes

* correctly ignore brotli encoding on server-side ([#180](https://github.com/nuxt-community/axios-module/issues/180)) ([4a52bfd](https://github.com/nuxt-community/axios-module/commit/4a52bfd))



<a name="5.3.5"></a>
## [5.3.5](https://github.com/nuxt-community/axios-module/compare/v5.3.4...v5.3.5) (2018-11-07)


### Bug Fixes

* **defaults:** ignore `cf-ray` and `cf-connecting-ip` headers on server side ([#20](https://github.com/nuxt-community/axios-module/issues/20)) ([#175](https://github.com/nuxt-community/axios-module/issues/175)) ([3ae5416](https://github.com/nuxt-community/axios-module/commit/3ae5416))
* **defaults:** set proper Accept-Encoding for server side ([#176](https://github.com/nuxt-community/axios-module/issues/176)) ([c84fb56](https://github.com/nuxt-community/axios-module/commit/c84fb56))



<a name="5.3.4"></a>
## [5.3.4](https://github.com/nuxt-community/axios-module/compare/v5.3.3...v5.3.4) (2018-10-30)



<a name="5.3.3"></a>
## [5.3.3](https://github.com/nuxt-community/axios-module/compare/v5.3.2...v5.3.3) (2018-09-28)


### Bug Fixes

* **package:** add missing types from index.d.ts ([3a06503](https://github.com/nuxt-community/axios-module/commit/3a06503))



<a name="5.3.2"></a>
## [5.3.2](https://github.com/nuxt-community/axios-module/compare/v5.3.1...v5.3.2) (2018-09-21)


### Bug Fixes

* **types:** replace AxiosPromise to Promise ([#162](https://github.com/nuxt-community/axios-module/issues/162)) ([5fd9214](https://github.com/nuxt-community/axios-module/commit/5fd9214))



<a name="5.3.1"></a>
## [5.3.1](https://github.com/nuxt-community/axios-module/compare/v5.3.0...v5.3.1) (2018-03-31)



<a name="5.3.0"></a>
# [5.3.0](https://github.com/nuxt-community/axios-module/compare/v5.2.0...v5.3.0) (2018-03-31)


### Features

* CLI improvements ([481e6da](https://github.com/nuxt-community/axios-module/commit/481e6da))



<a name="5.2.0"></a>
# [5.2.0](https://github.com/nuxt-community/axios-module/compare/v5.1.1...v5.2.0) (2018-03-31)


### Bug Fixes

* **progress:** onProgress when currentRequests is zero ([#118](https://github.com/nuxt-community/axios-module/issues/118)) ([a90236e](https://github.com/nuxt-community/axios-module/commit/a90236e))


### Features

* consola integration ([4ec3b5d](https://github.com/nuxt-community/axios-module/commit/4ec3b5d))



<a name="5.1.1"></a>
## [5.1.1](https://github.com/nuxt-community/axios-module/compare/v5.1.0...v5.1.1) (2018-03-06)


### Bug Fixes

* **progress:** handle division by zero ([#117](https://github.com/nuxt-community/axios-module/issues/117)) ([040eaf7](https://github.com/nuxt-community/axios-module/commit/040eaf7)), closes [#166](https://github.com/nuxt-community/axios-module/issues/166)



<a name="5.1.0"></a>
# [5.1.0](https://github.com/nuxt-community/axios-module/compare/v5.0.1...v5.1.0) (2018-03-05)


### Features

* allow disable progress per request. closes [#112](https://github.com/nuxt-community/axios-module/issues/112). ([1530bb6](https://github.com/nuxt-community/axios-module/commit/1530bb6))
* disable https for localhost url ([#93](https://github.com/nuxt-community/axios-module/issues/93)) ([dd67734](https://github.com/nuxt-community/axios-module/commit/dd67734))



<a name="5.0.1"></a>
## [5.0.1](https://github.com/nuxt-community/axios-module/compare/v5.0.0...v5.0.1) (2018-02-08)


### Bug Fixes

* don't mutate env.API_URL ([a8ea331](https://github.com/nuxt-community/axios-module/commit/a8ea331))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/nuxt-community/axios-module/compare/v5.0.0-rc.2...v5.0.0) (2018-02-04)


### Bug Fixes

* **progress:** finish on fail ([ea7b569](https://github.com/nuxt-community/axios-module/commit/ea7b569))


### Features

* https option ([#57](https://github.com/nuxt-community/axios-module/issues/57)) ([9ecb547](https://github.com/nuxt-community/axios-module/commit/9ecb547))
* passing options via proxy option ([a923db3](https://github.com/nuxt-community/axios-module/commit/a923db3))
* support retry with axios-retry ([7221cac](https://github.com/nuxt-community/axios-module/commit/7221cac)), closes [#77](https://github.com/nuxt-community/axios-module/issues/77)



<a name="5.0.0-rc.2"></a>
# [5.0.0-rc.2](https://github.com/nuxt-community/axios-module/compare/v5.0.0-rc.1...v5.0.0-rc.2) (2018-01-29)


### Bug Fixes

* **package:** require [@nuxtjs](https://github.com/nuxtjs)/proxy as a peerDependency ([fd1ef47](https://github.com/nuxt-community/axios-module/commit/fd1ef47))
* support dynamic API_URL for SSR ([ea4882a](https://github.com/nuxt-community/axios-module/commit/ea4882a))



<a name="5.0.0-rc.1"></a>
# [5.0.0-rc.1](https://github.com/nuxt-community/axios-module/compare/v5.0.0-rc.0...v5.0.0-rc.1) (2018-01-28)


### Bug Fixes

* **progress:** ensure $loading is valid ([cbdc586](https://github.com/nuxt-community/axios-module/commit/cbdc586))



<a name="5.0.0-rc.0"></a>
# [5.0.0-rc.0](https://github.com/nuxt-community/axios-module/compare/v5.0.0-alpha.1...v5.0.0-rc.0) (2018-01-28)


### Features

* support proxy ([0d3be17](https://github.com/nuxt-community/axios-module/commit/0d3be17))



<a name="5.0.0-alpha.1"></a>
# [5.0.0-alpha.1](https://github.com/nuxt-community/axios-module/compare/v5.0.0-alpha.0...v5.0.0-alpha.1) (2018-01-28)


### Features

* integrate with nuxt progress bar ([41a0964](https://github.com/nuxt-community/axios-module/commit/41a0964))



<a name="5.0.0-alpha.0"></a>
# [5.0.0-alpha.0](https://github.com/nuxt-community/axios-module/compare/v4.5.2...v5.0.0-alpha.0) (2018-01-28)


### Code Refactoring

* a better and more stable way to specify baseURL and browserBaseURL options ([533cf4e](https://github.com/nuxt-community/axios-module/commit/533cf4e))


### Features

* interceptor helpers ([fa3eb47](https://github.com/nuxt-community/axios-module/commit/fa3eb47))
* rewrite plugin ([647b58f](https://github.com/nuxt-community/axios-module/commit/647b58f))


### BREAKING CHANGES

* prefix should be set to `/api` for backward compability. refer to new docs.



<a name="4.5.2"></a>
## [4.5.2](https://github.com/nuxt-community/axios-module/compare/v4.5.1...v4.5.2) (2017-12-29)



<a name="4.5.1"></a>
## [4.5.1](https://github.com/nuxt-community/axios-module/compare/v4.5.0...v4.5.1) (2017-12-29)



<a name="4.5.0"></a>
# [4.5.0](https://github.com/nuxt-community/axios-module/compare/v4.4.0...v4.5.0) (2017-11-16)


### Bug Fixes

* link to the proxy page ([5449939](https://github.com/nuxt-community/axios-module/commit/5449939))


### Features

* disable sefault error handler ([#44](https://github.com/nuxt-community/axios-module/issues/44)) ([f1e95ff](https://github.com/nuxt-community/axios-module/commit/f1e95ff))



<a name="4.4.0"></a>
# [4.4.0](https://github.com/nuxt-community/axios-module/compare/v4.3.1...v4.4.0) (2017-09-30)


### Features

* **proxyHeader:** proxyHeadersIgnore option ([7c13655](https://github.com/nuxt-community/axios-module/commit/7c13655))



<a name="4.3.1"></a>
## [4.3.1](https://github.com/nuxt-community/axios-module/compare/v4.3.0...v4.3.1) (2017-09-28)



<a name="4.3.0"></a>
# [4.3.0](https://github.com/nuxt-community/axios-module/compare/v4.2.1...v4.3.0) (2017-09-11)


### Features

* don't rely on hostname for default values ([dadd7d8](https://github.com/nuxt-community/axios-module/commit/dadd7d8))



<a name="4.2.1"></a>
## [4.2.1](https://github.com/nuxt-community/axios-module/compare/v4.2.0...v4.2.1) (2017-09-08)



<a name="4.2.0"></a>
# [4.2.0](https://github.com/nuxt-community/axios-module/compare/v4.1.1...v4.2.0) (2017-09-08)


### Features

* pass ctx to errorHandlers ([c70749a](https://github.com/nuxt-community/axios-module/commit/c70749a))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/nuxt-community/axios-module/compare/v4.1.0...v4.1.1) (2017-09-06)


### Bug Fixes

* delete accept header ([2f04e30](https://github.com/nuxt-community/axios-module/commit/2f04e30)), closes [#12](https://github.com/nuxt-community/axios-module/issues/12)



<a name="4.1.0"></a>
# [4.1.0](https://github.com/nuxt-community/axios-module/compare/v4.0.1...v4.1.0) (2017-09-06)


### Bug Fixes

* inject $axios in current ctx ([356b31f](https://github.com/nuxt-community/axios-module/commit/356b31f))


### Features

* add options.init ([8e0c0e8](https://github.com/nuxt-community/axios-module/commit/8e0c0e8))


### Performance Improvements

* move init outside of plugin ([bcd4710](https://github.com/nuxt-community/axios-module/commit/bcd4710))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/nuxt-community/axios-module/compare/v4.0.0...v4.0.1) (2017-09-04)


### Bug Fixes

* **package:** make nuxt devDependency ([a36a886](https://github.com/nuxt-community/axios-module/commit/a36a886))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/nuxt-community/axios-module/compare/v3.1.4...v4.0.0) (2017-08-30)


### Features

* better baseURL message ([61432a1](https://github.com/nuxt-community/axios-module/commit/61432a1))
* responseInterceptor and errorHandler ([b16d6bf](https://github.com/nuxt-community/axios-module/commit/b16d6bf))
* upgrade for nuxt rc8 ([a341185](https://github.com/nuxt-community/axios-module/commit/a341185))


### BREAKING CHANGES

* app.axios is not available anymore (without $) should always use app.$axios



<a name="3.1.4"></a>
## [3.1.4](https://github.com/nuxt-community/axios-module/compare/v3.1.3...v3.1.4) (2017-08-13)


### Bug Fixes

* create fresh objects for all default header scopes ([7ba3ae8](https://github.com/nuxt-community/axios-module/commit/7ba3ae8))



<a name="3.1.3"></a>
## [3.1.3](https://github.com/nuxt-community/axios-module/compare/v3.1.1...v3.1.3) (2017-08-13)

### Bug Fixes

* **headers:** fix security bug with default request headers ([9355228](https://github.com/nuxt-community/axios-module/commit/9355228))



<a name="3.1.1"></a>
## 3.1.1 (2017-08-13)
 (repository moved from nuxt-community/modules)

### Features

* **axios:** fetch style requests

<a name="3.0.1"></a>
## [3.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/axios@3.0.0...@nuxtjs/axios@3.0.1) (2017-07-25)


### Bug Fixes

* **axios:** typo in default headers ([9697559](https://github.com/nuxt/modules/commit/9697559))




<a name="3.0.0"></a>
# [3.0.0](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.3.0...@nuxtjs/axios@3.0.0) (2017-07-25)


### Code Refactoring

* **axios:** remove $ shortcut mixins ([1ab2bd6](https://github.com/nuxt/modules/commit/1ab2bd6))


### BREAKING CHANGES

* **axios:** You have to explicitly use `this.$axios.[method]` instead of `this.$[method]`




<a name="2.3.0"></a>
# [2.3.0](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.2.4...@nuxtjs/axios@2.3.0) (2017-07-24)


### Features

* **axios:** optionally disable error handling (#74) ([a195feb](https://github.com/nuxt/modules/commit/a195feb))
* **axios:** redirectError ([4ce1a1c](https://github.com/nuxt/modules/commit/4ce1a1c))




<a name="2.2.4"></a>
## [2.2.4](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.2.3...@nuxtjs/axios@2.2.4) (2017-07-20)


### Bug Fixes

* **axios:** temporary fix for nuxt/nuxt.js#1127 ([499b639](https://github.com/nuxt/modules/commit/499b639)), closes [nuxt/nuxt.js#1127](https://github.com/nuxt/nuxt.js/issues/1127)




<a name="2.2.3"></a>
## [2.2.3](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.2.1...@nuxtjs/axios@2.2.3) (2017-07-19)


### Bug Fixes

* **axios:** don't proxy Host header from request (#72, #39) ([61462ca](https://github.com/nuxt/modules/commit/61462ca))




<a name="2.2.2"></a>
## [2.2.2](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.2.1...@nuxtjs/axios@2.2.2) (2017-07-19)


### Bug Fixes

* **axios:** don't proxy Host header from request (#72, #39) ([61462ca](https://github.com/nuxt/modules/commit/61462ca))




<a name="2.2.1"></a>
## [2.2.1](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.2.0...@nuxtjs/axios@2.2.1) (2017-07-15)


### Bug Fixes

* **axios:** problems related to #65 ([4e7dd3f](https://github.com/nuxt/modules/commit/4e7dd3f))




<a name="2.0.3"></a>
## [2.0.3](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.0.2...@nuxtjs/axios@2.0.3) (2017-06-10)


### Bug Fixes

* **axios:** Handle relative baseURL ([19b8453](https://github.com/nuxt/modules/commit/19b8453))
* handle 0.0.0.0 host ([610e0f5](https://github.com/nuxt/modules/commit/610e0f5))




<a name="2.0.2"></a>
## [2.0.2](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.0.1...@nuxtjs/axios@2.0.2) (2017-06-09)


### Bug Fixes

* **axios:** Node 6.x support ([54deac0](https://github.com/nuxt/modules/commit/54deac0))




<a name="2.0.1"></a>
## [2.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/axios@2.0.0...@nuxtjs/axios@2.0.1) (2017-06-09)


### Bug Fixes

* **axios:** ensure store exists before injecting ([23ad7b7](https://github.com/nuxt/modules/commit/23ad7b7))




<a name="2.0.0"></a>
# [2.0.0](https://github.com/nuxt/modules/compare/@nuxtjs/axios@1.0.2...@nuxtjs/axios@2.0.0) (2017-06-09)


### Bug Fixes

* **axios:** install using Vue.use ([184651b](https://github.com/nuxt/modules/commit/184651b))
* **axios:** req typo ([16f28b1](https://github.com/nuxt/modules/commit/16f28b1))
* **axios:** use relative `API_URL` if same host and port else `API_URL` ([3421d19](https://github.com/nuxt/modules/commit/3421d19))


### Features

* **axios:** AXIOS_CREDENTIALS, AXIOS_SSR_HEADERS ([4dfdc2d](https://github.com/nuxt/modules/commit/4dfdc2d))
* **axios:** don't append optional config into env ([fe189e8](https://github.com/nuxt/modules/commit/fe189e8))
* **axios:** Easier API ([f54a434](https://github.com/nuxt/modules/commit/f54a434))
* **axios:** New API ([0194226](https://github.com/nuxt/modules/commit/0194226))
* **axios:** nuxt friendly errors for SSR ([65bc50f](https://github.com/nuxt/modules/commit/65bc50f))


### BREAKING CHANGES

* **axios:** API_PREFIX is deprecated.




<a name="1.0.2"></a>
## [1.0.2](https://github.com/nuxt/modules/compare/@nuxtjs/axios@1.0.0...@nuxtjs/axios@1.0.2) (2017-05-29)


### Bug Fixes

* **axios:** remove extra function call on computed prop ([cd9da0b](https://github.com/nuxt/modules/commit/cd9da0b))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/nuxt/modules/compare/@nuxtjs/axios@1.0.0...@nuxtjs/axios@1.0.1) (2017-05-26)


### Bug Fixes

* **axios:** remove extra function call on computed prop ([cd9da0b](https://github.com/nuxt/modules/commit/cd9da0b))




<a name="1.0.0"></a>
# 1.0.0 (2017-05-26)


### Features

* initial migration to 1.0.0-alpha1 ([05c1b7a](https://github.com/nuxt/modules/commit/05c1b7a))


### BREAKING CHANGES

* New modules system is backward incompatible with nuxt-helpers style modules




<a name="0.0.1"></a>
## 0.0.1 (2017-05-10)
