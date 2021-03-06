var
ncs = require('./ncscolor.js')
, assert = require('assert');

describe('ncs', function(){

	it('converts NCS color names to hex values', function(){
		assert.equal(ncs.hex('NCS S 2080-G20Y'), '#65d636');
		assert.equal(ncs.hex('NCS 2080-G20Y'), '#65d636');
		assert.equal(ncs.hex('NCS S 2060-B'), '#399bd6');
	});

	it('converts NCS color names to rgb values', function(){
		assert.equal(ncs.rgb('NCS S 5000-N'), 'rgb(127,127,127)');
		assert.equal(ncs.rgb('NCS 5000-N'), 'rgb(127,127,127)');
	});

	it('returns null if invalid NCS color name', function() {
		assert.equal(ncs.rgb(''), null);
		assert.equal(ncs.hex('NCS5000-N'), null);
		assert.equal(ncs.hex('12345'), null);
		assert.notEqual(ncs.hex('NCS 5000-N'), null);
	});

});