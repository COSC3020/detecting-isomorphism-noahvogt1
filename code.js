function generateAllPermutations(array) {
    if (array.length === 1) return [array];
    let permutations = [];
    
    for (let i = 0; i < array.length; i++) {
        let remainingElements = generateAllPermutations(array.slice(0, i).concat(array.slice(i + 1)));
        
        for (let perm of remainingElements) {
            permutations.push([array[i], ...perm]);
        }
    }
    return permutations;
}

function matricesAreEqual(permutedGraph, graph2) {
    for (let i = 0; i < permutedGraph.length; i++) {
        for (let j = 0; j < permutedGraph.length; j++) {
            if (permutedGraph[i][j] != graph2[i][j]) return false;
        }
    }
    return true;
}

function are_isomorphic(graph1, graph2) {
    if (graph1.length != graph2.length) return false;

    let array = Array(graph1.length);
    for (let i = 0; i < graph1.length; i++) {
        array[i] = i;
    }

    let allPermutations = generateAllPermutations(array);

    for (let permutation of allPermutations) {

        let permutedGraph = Array(graph1.length);
        for (let i = 0; i < graph1.length; i++) {
            permutedGraph[i] = Array(graph1.length).fill(0);
        }
        
        for (let i = 0; i < graph1.length; i++) {
            for (let j = 0; j < graph1.length; j++) {
                permutedGraph[i][j] = graph1[permutation[i]][permutation[j]];
            }
        }
        
        if (matricesAreEqual(permutedGraph, graph2)) {
            return true;
        }
    }
    
    return false;
}
