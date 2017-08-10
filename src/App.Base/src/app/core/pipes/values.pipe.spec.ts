import { ValuesPipe } from './values.pipe';

describe('ValuesPipe', () => {
  it('create an instance', () => {
    //SETUP
    const pipe = new ValuesPipe();

    //TEST
    expect(pipe).toBeTruthy();
  });

  it('extract values', () => {
    //SETUP
    const pipe = new ValuesPipe();

    //ACT    
    let result = pipe.transform({});

    //TEST
    expect(result).toEqual([]);
  });

  it('extract values', () => {
    //SETUP
    const pipe = new ValuesPipe();

    //ACT    
    let result = pipe.transform({
      "1": { key: "obj1" },
      "2": { key: "obj2" }
    });

    //TEST
    expect(result).toEqual([{ key: "obj1" }, { key: "obj2" }]);
  });
});
