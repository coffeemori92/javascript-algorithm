// abcdefgh
// 20190923

const s = 'aacdddddddddfffffffffgghhh';
let result = '';

console.log(`
  ${s.match(/a/g).length}
  ${Number(s.match(/b/g))}
  ${s.match(/c/g).length}
  ${s.match(/d/g).length}
  ${Number(s.match(/e/g))}
  ${s.match(/f/g).length}
  ${s.match(/g/g).length}
  ${s.match(/h/g).length}
`);
