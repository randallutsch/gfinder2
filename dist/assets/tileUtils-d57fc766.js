import"./ArrayPool-45db95ab.js";import"./Extent-54ef1174.js";import"./string-7d6c8f5c.js";import"./mathUtils-daf59e84.js";import"./Query-8a7aa408.js";import"./TileKey-03ab4f60.js";function s(l,c,i,p){const o=l.clone(),t=1<<o.level,r=o.col+c,m=o.row+i;return p&&r<0?(o.col=r+t,o.world-=1):r>=t?(o.col=r-t,o.world+=1):o.col=r,o.row=m,o}export{s as l};
