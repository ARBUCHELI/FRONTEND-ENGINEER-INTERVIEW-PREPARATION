const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter(v => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo) {
  // Check if both parameters are instances of Vertex
  if (!(vertexOne instanceof Vertex) || !(vertexTwo instanceof Vertex)) {
    throw new Error('Both parameters must be instances of Vertex.');
  }

  // Create edges in both directions
  vertexOne.addEdge(vertexTwo);
  vertexTwo.addEdge(vertexOne);
}


  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

trainNetwork.addEdge(atlantaStation, newYorkStation);

trainNetwork.print();

module.exports = Graph;