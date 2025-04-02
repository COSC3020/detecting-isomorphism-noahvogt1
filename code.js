function degree(graph, node) {
  let degree = 0;
  for (let i = 0; i < graph[node].length; i++) {
    if (graph[node][i] === 1) {
      degree++;
    }
  }
  return degree;
}

function getSortedNodesByDegree(graph) {
  let nodeDegrees = [];
  for (let i = 0; i < graph.length; i++) {
    nodeDegrees.push([degree(graph, i), i]);
  }
  nodeDegrees.sort((a, b) => a[0] - b[0]);
  return nodeDegrees;
}

function areIsomorphic(graph1, graph2) {
  let sortedNodes1 = getSortedNodesByDegree(graph1);
  let sortedNodes2 = getSortedNodesByDegree(graph2);

  if (sortedNodes1.length !== sortedNodes2.length) {
    return false;
  }

  let nodeMap = [];
  for (let i = 0; i < sortedNodes1.length; i++) {
    let node1 = sortedNodes1[i][1];
    let node2 = sortedNodes2[i][1];
    nodeMap[node1] = node2;
  }

  for (let i = 0; i < graph1.length; i++) {
    for (let j = 0; j < graph1.length; j++) {
      if (graph1[i][j] !== graph2[nodeMap[i]][nodeMap[j]]) {
        return false;
      }
    }
  }

  return true;
}
