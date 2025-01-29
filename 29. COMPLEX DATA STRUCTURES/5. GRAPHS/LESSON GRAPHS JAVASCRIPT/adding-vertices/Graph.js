const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
  constructor() {
    this.vertices = [];
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }

  addVertex(data) {
    const vertex = new Vertex(data)
    this.vertices.push(vertex);
    return vertex;
  }
}

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');
trainNetwork.print();

module.exports = Graph;