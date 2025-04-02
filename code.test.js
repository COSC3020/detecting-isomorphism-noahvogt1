const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('Algorithms/code.js') + '');

var graph1 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];
var graph2 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];
var result = are_isomorphic(graph1, graph2);
assert(JSON.stringify(result) == JSON.stringify(true));

var graph3 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
];
var graph4 = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];
var result = are_isomorphic(graph3, graph4);
assert(JSON.stringify(result) == JSON.stringify(false));

var graph5 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
];
var graph6 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
];
var result = are_isomorphic(graph5, graph6);
assert(JSON.stringify(result) == JSON.stringify(true));

var graph7 = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0]
];
var graph8 = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
];
var result = are_isomorphic(graph7, graph8);
assert(JSON.stringify(result) == JSON.stringify(true));

var graph9 = [
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0]
];
var graph10 = [
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0]
];
var result = are_isomorphic(graph9, graph10);
assert(JSON.stringify(result) == JSON.stringify(true));

var graph11 = [
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0]
];
var graph12 = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
];
var result = are_isomorphic(graph11, graph12);
assert(JSON.stringify(result) == JSON.stringify(false));
