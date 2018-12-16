const path = require('path');
const fs = require('fs');
const promisify = require('util').promisify;
const mammoth = require('mammoth');

const readFile = promisify(fs.readFile);
const stats = promisify(fs.stat);
const readDir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

const root = process.cwd();
const dataSrc = path.resolve(root, 'data/docx');
const mockSrc = path.resolve(root, 'mock');
const foodSrc = path.resolve(root, 'images/food');


const DataEnum = {
    '坚果类': 'nut',
    '巧克力': 'chocolate',
    '海苔紫菜': 'nori',
    '薯片薯条': 'chips',
    '饼干': 'biscuits'
}


/**
 * 1、读取一个docx文件，获取标题、内容、图片
 * 标题：直接是文件名
 * 内容：通过mammoth.extractRawText()方法获取
 * 图片：通过mammoth.images.imgElement()方法获取，组装成完整的base64编码，写入到images文件夹中，以时间戳命名，最终返回的是图片的路径
 * 2、每读取一个docx文件，就将读取到的标题、内容、图片路径写入到对象中
 * {
      "name": String,
      "desc": String,
      "img_src": [
        String, String
      ]  
    }
 * --------------
 * 1、读取data文件夹
 * 2、判断是文件夹；文件夹名称与DataEnum相对应，并创建json文件
 * 3、遍历每一个文件夹里的docx文件，将数据添加到对应的json文件中
 * 
 */

/**
 * 创建json格式数据
 */
async function createJson(src, targetSrc) {
    const result = await readDir(src);

    for (let item of result) {
        let foodData = [];
        const p = path.resolve(src, item);
        const stat = await stats(p);

        if (stat.isDirectory()) {
            const dP = path.resolve(targetSrc, `${DataEnum[item]}.json`);


            const childDirResult = await readDir(p);

            for (let file of childDirResult) {
                const src = path.resolve(p, file);

                const data = await writeData(src, file.replace(/\.docx/, ''));

                foodData.push(data);
            }

            await writeFile(dP, JSON.stringify({
                data: foodData
            }));
        }

    }
}



/**
 * 写入数据
 */
async function writeData(src, fileName) {
    const data = {
        name: '',
        desc: '',
        img_src: []
    };

    data.name = fileName;

    var options = {
        convertImage: mammoth.images.imgElement(function (image) {
            return image.read("base64").then(async function (imageBuffer) {
                const imgName = `${+new Date()}.jpg`;
                const filePath = path.resolve(foodSrc, imgName);
                data.img_src.push(`/images/food/${imgName}`);

                // base64转化为图片，前缀不要，编码格式写为base64
                await writeFile(filePath, imageBuffer, 'base64');

                return {
                    src: "data:" + image.contentType + ";base64," + imageBuffer
                };
            });
        })
    };

    await mammoth.convertToHtml({
        path: src
    }, options)

    const result = await mammoth.extractRawText({
        path: src
    }, options);

    data.desc = result.value;

    return data;
}

createJson(dataSrc, mockSrc);

// writeData(path.resolve(dataSrc, '饼干/澳洲TimTam巧克力饼干.docx'), '澳洲TimTam巧克力饼干.docx')