function createMatrix(n, m) {
  
    const matrix = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < m; j++) {
        row.push(0); 
      }
      matrix.push(row);
    }
    return matrix;
  }
  

  const n = 3; 
  const m = 4; 
  const matrix = createMatrix(n, m);
  console.log("Matrix:", matrix);
  