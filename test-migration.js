const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
    const db = await sqlite.open({
        filename: 'Scholarships.sqlite',
        driver: sqlite3.Database,
    });

    await db.migrate({ force: 'last' });


    const Scholarships = await db.all('SELECT * FROM Scholarship');
    console.log('ALL SCHOLARSHIPS', JSON.stringify(Scholarships, null, 2));
}

setup();