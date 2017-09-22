'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('fp.mapCall', function(){
    it('should square every number in the original array', function(){
        expect(fp.mapCall([1,2,3], n => n*n)).toEqual([1,4,9]);
    });
});

describe('fp.map', function(){
    it('should add a space and poop to every string', function (){
        expect(fp.mapCall(['smelly', 'stinky', 'huuuuuge'], n => `${n} poop`)).toEqual(['smelly poop', 'stinky poop', 'huuuuuge poop'])
    })
})

describe('fp.mapBind', function(){
    it('should return a new function that will in turn square every number in original array', function(){
        expect(fp.mapBind([1,2,3], n => n*n)).toEqual([1,4,9]);
    });
});

describe('fp.mapBind', function(){
    it('should return a new funciton that will in turn then add a space and poop to every string', function (){
        expect(fp.mapBind(['smelly', 'stinky', 'huuuuuge'], n => `${n} poop`)).toEqual(['smelly poop', 'stinky poop', 'huuuuuge poop'])
    })
})