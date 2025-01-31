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
    const index = this.vertices.findIndex(v => v === vertex);

    if (index !== -1) {
      this.vertices.splice(index, 1);
    }
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}


const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex('Atlanta');
const newYorkStation = trainNetwork.addVertex('New York');

trainNetwork.removeVertex(atlantaStation);

trainNetwork.print();

module.exports = Graph;