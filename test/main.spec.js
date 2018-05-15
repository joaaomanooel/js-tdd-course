describe('Main', () => {
  let arr;
  // Roda antes de todos os blocos
  before(() => {

  });
  // Roda depois de todos os blocos
  after(() => {

  });
  // Roda antes de cada bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });
  // Roda depois de cada bloco
  afterEach(() => {

  });

  it('Should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length);
  });

  it('Should have a size of 2 when pop another value from the array', () => {
    arr.pop();
    console.log(arr.length);
  });

  it('Should remove the value 2 when use pop in the array', () => {
    console.log(arr.pop() === 3);
  });
});
