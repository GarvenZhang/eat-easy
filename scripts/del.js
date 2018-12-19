const path = require('path');
const fs = require('fs');
const promisify = require('util').promisify;

const stats = promisify(fs.stat);
const readDir = promisify(fs.readdir);
const unlink = promisify(fs.unlink);

const root = process.cwd();
const foodSrc = path.resolve(root, 'images/food');

async function del(src) {
    const files = await readDir(src);

    files.forEach(async (file) => {
        const filePath = path.resolve(src, file);
        const stat = await stats(filePath);

        if (stat.isFile()) {
            await unlink(filePath);
        }
    });
}

del(foodSrc);