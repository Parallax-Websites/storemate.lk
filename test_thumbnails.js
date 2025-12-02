const https = require('https');

async function checkThumbnail(videoId, quality) {
    return new Promise((resolve) => {
        const url = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
        https.get(url, (res) => {
            resolve({
                quality,
                status: res.statusCode,
                url: url,
                exists: res.statusCode === 200
            });
        }).on('error', () => {
            resolve({
                quality,
                status: 'ERROR',
                url: url,
                exists: false
            });
        });
    });
}

async function testAllThumbnails() {
    const videoId = '-CYtv4drzyo';
    const qualities = ['maxresdefault', 'hqdefault', 'mqdefault', 'default'];

    console.log(`Testing thumbnails for video ID: ${videoId}`);
    console.log('---');

    for (const quality of qualities) {
        const result = await checkThumbnail(videoId, quality);
        console.log(`${quality}: ${result.exists ? 'EXISTS' : 'NOT FOUND'} (${result.status}) - ${result.url}`);
    }
}

testAllThumbnails();
