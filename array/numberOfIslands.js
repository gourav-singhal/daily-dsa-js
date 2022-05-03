// Given an m x n 2D binary grid grid which represents a map of '1's (land) 
// and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Input: grid = [
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]
// ]
// Output: 1

function numIslands(grid){

    function dfs(x, y) {
        // base case: hitting the boundary, found water, or visited before
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === '0' || grid[x][y] === 'visited') return;
        
        // mark visited and dfs four directions
        grid[x][y] = 'visited';
        const fourDir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for(let dir of fourDir) {
            dfs(x + dir[0], y + dir[1]);
        }
    }
    
    let result = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j< grid[0].length; j++) {
            if (grid[i][j] === '1') {
                result ++; // as we mark adjacent '1' as 'visited', we will not count the same island over and over again
                dfs(i, j)
            }
        }
    }
    
    return result;
};
