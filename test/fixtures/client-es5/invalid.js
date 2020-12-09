/* eslint-env browser */

( function () {
	var node;

	// eslint-disable-next-line no-restricted-properties
	document.appendChild( node.parentElement );

	// not-es5
	// The following features already trigger parser errors
	// <!-- eslint-disable-next-line es/no-arrow-functions -- >
	// <!-- eslint-disable-next-line es/no-binary-numeric-literals -->
	// <!-- eslint-disable-next-line es/no-block-scoped-functions -->
	// <!-- eslint-disable-next-line es/no-block-scoped-variables -->
	// <!-- eslint-disable-next-line es/no-classes -- >
	// <!-- eslint-disable-next-line es/no-computed-properties -- >
	// <!-- eslint-disable-next-line es/no-default-parameters -- >
	// <!-- eslint-disable-next-line es/no-destructuring -- >
	// <!-- eslint-disable-next-line es/no-for-of-loops -- >
	// <!-- eslint-disable-next-line es/no-generators -- >
	// <!-- eslint-disable-next-line es/no-modules -- >
	// <!-- eslint-disable-next-line es/no-new-target -- >
	// <!-- eslint-disable-next-line es/no-object-super-properties -- >
	// <!-- eslint-disable-next-line es/no-octal-numeric-literals -- >
	// <!-- eslint-disable-next-line es/no-property-shorthands -- >
	// <!-- eslint-disable-next-line es/no-regexp-prototype-flags -- >
	// <!-- eslint-disable-next-line es/no-regexp-u-flag -- >
	// <!-- eslint-disable-next-line es/no-regexp-y-flag -- >
	// <!-- eslint-disable-next-line es/no-rest-parameters -- >
	// <!-- eslint-disable-next-line es/no-spread-elements -- >
	// <!-- eslint-disable-next-line es/no-subclassing-builtins -- >
	// <!-- eslint-disable-next-line es/no-template-literals -- >
	// <!-- eslint-disable-next-line es/no-unicode-codepoint-escapes -- >
	// Globals which won't exist
	// <!-- eslint-disable-next-line es/no-map -- >
	// <!-- eslint-disable-next-line es/no-promise -- >
	// <!-- eslint-disable-next-line es/no-proxy -- >
	// <!-- eslint-disable-next-line es/no-reflect -- >
	// <!-- eslint-disable-next-line es/no-set -- >
	// <!-- eslint-disable-next-line es/no-symbol -- >
	// <!-- eslint-disable-next-line es/no-typed-arrays -- >
	// <!-- eslint-disable-next-line es/no-weak-map -- >
	// <!-- eslint-disable-next-line es/no-weak-set -- >

	// eslint-disable-next-line es/no-array-from
	Array.from();
	// eslint-disable-next-line es/no-array-of
	Array.of();
	// eslint-disable-next-line es/no-array-prototype-copywithin
	[].copyWithin();
	// eslint-disable-next-line es/no-array-prototype-fill
	[].fill();
	// eslint-disable-next-line es/no-array-prototype-findindex
	[].findIndex();
	// eslint-disable-next-line es/no-array-prototype-keys
	[].keys();
	// eslint-disable-next-line es/no-array-prototype-values
	[].values();
	// eslint-disable-next-line es/no-string-prototype-codepointat
	''.codePointAt();
	// eslint-disable-next-line es/no-array-prototype-keys
	[].keys();
	// eslint-disable-next-line es/no-array-prototype-entries
	[].entries();
	// eslint-disable-next-line es/no-math-acosh
	Math.acosh();
	// eslint-disable-next-line es/no-math-asinh
	Math.asinh();
	// eslint-disable-next-line es/no-math-atanh
	Math.atanh();
	// eslint-disable-next-line es/no-math-cbrt
	Math.cbrt();
	// eslint-disable-next-line es/no-math-clz32
	Math.clz32();
	// eslint-disable-next-line es/no-math-cosh
	Math.cosh();
	// eslint-disable-next-line es/no-math-expm1
	Math.expm1();
	// eslint-disable-next-line es/no-math-fround
	Math.fround();
	// eslint-disable-next-line es/no-math-hypot
	Math.hypot();
	// eslint-disable-next-line es/no-math-imul
	Math.imul();
	// eslint-disable-next-line es/no-math-log10
	Math.log10();
	// eslint-disable-next-line es/no-math-log1p
	Math.log1p();
	// eslint-disable-next-line es/no-math-log2
	Math.log2();
	// eslint-disable-next-line es/no-math-sign
	Math.sign();
	// eslint-disable-next-line es/no-math-sinh
	Math.sinh();
	// eslint-disable-next-line es/no-math-tanh
	Math.tanh();
	// eslint-disable-next-line es/no-math-trunc
	Math.trunc();
	// eslint-disable-next-line es/no-number-epsilon
	Number.EPSILON.toString();
	// eslint-disable-next-line es/no-number-isfinite
	Number.isFinite();
	// eslint-disable-next-line es/no-number-isinteger
	Number.isInteger();
	// eslint-disable-next-line es/no-number-isnan
	Number.isNaN();
	// eslint-disable-next-line es/no-number-issafeinteger
	Number.isSafeInteger();
	// eslint-disable-next-line es/no-number-maxsafeinteger
	Number.MAX_SAFE_INTEGER.toString();
	// eslint-disable-next-line es/no-number-minsafeinteger
	Number.MIN_SAFE_INTEGER.toString();
	// eslint-disable-next-line es/no-number-parsefloat
	Number.parseFloat();
	// eslint-disable-next-line es/no-number-parseint
	Number.parseInt();
	// eslint-disable-next-line es/no-object-assign
	Object.assign();
	// eslint-disable-next-line es/no-object-getownpropertysymbols
	Object.getOwnPropertySymbols();
	// eslint-disable-next-line es/no-object-is
	Object.is();
	// eslint-disable-next-line es/no-object-setprototypeof
	Object.setPrototypeOf();
	// eslint-disable-next-line es/no-string-fromcodepoint
	String.fromCodePoint();
	// eslint-disable-next-line es/no-string-prototype-endswith
	''.endsWith();
	// eslint-disable-next-line es/no-string-prototype-includes
	''.includes();
	// eslint-disable-next-line es/no-string-prototype-normalize
	''.normalize();
	// eslint-disable-next-line es/no-string-prototype-repeat
	''.repeat();
	// eslint-disable-next-line es/no-string-prototype-startswith
	''.startsWith();
	// eslint-disable-next-line es/no-string-raw
	String.raw();

	// not-es6
	// eslint-disable-next-line es/no-array-prototype-includes
	[].includes();
	// eslint-disable-next-line es/no-array-prototype-entries, es/no-object-entries
	Object.entries();
	// eslint-disable-next-line es/no-array-prototype-entries
	( {} ).entries();
	// eslint-disable-next-line es/no-object-getownpropertydescriptors
	Object.getOwnPropertyDescriptors();
	// eslint-disable-next-line es/no-array-prototype-values, es/no-object-values
	Object.values();
	// eslint-disable-next-line es/no-array-prototype-values
	( {} ).values();

	// not-es2016
	// eslint-disable-next-line es/no-string-prototype-padstart-padend
	''.padStart();

	// not-es2017 introduces no rules

	// not-es2018
	// eslint-disable-next-line es/no-string-prototype-trimstart-trimend
	''.trimEnd();
	// eslint-disable-next-line es/no-object-fromentries
	Object.fromEntries();

	// es2020 rules don't fail in ES5, tested in server/invalid.js instead
	// <!-- eslint-disable-next-line es/no-bigint -->
	// <!-- eslint-disable-next-line es/no-global-this -->
	// <!-- eslint-disable-next-line es/no-promise-all-settled -->
	// <!-- eslint-disable-next-line es/no-promise-any -->

	// not-es2021
	// Nothing yet

}() );
