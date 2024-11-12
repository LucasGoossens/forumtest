export let fakeDb = [];

for(let i = 0 ; i < 10; i++ ){
    
    const testObj = {
        id: i,
        two: i + i,
        three: i * i       
    };

    fakeDb.push(testObj);
}

