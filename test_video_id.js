// Test YouTube video ID extraction
function getYouTubeVideoId(url) {
    // Handle multiple YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,  // youtube.com/watch?v=VIDEO_ID
        /(?:youtube\.com\/embed\/)([^&\n?#]+)/,    // youtube.com/embed/VIDEO_ID
        /(?:youtu\.be\/)([^&\n?#]+)/,              // youtu.be/VIDEO_ID
        /(?:youtube\.com\/v\/)([^&\n?#]+)/         // youtube.com/v/VIDEO_ID
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1] && match[1].length === 11) {
            return match[1];
        }
    }

    return null;
}

// Test URLs
const testUrls = [
    "https://www.youtube.com/watch?v=-CYtv4drzyo",
    "https://youtu.be/-CYtv4drzyo?si=yq8utB6BZVlueoC4",
    "https://youtu.be/EwXu1ovEBFY?si=KsMr7XC90wCi3WyM"
];

testUrls.forEach(url => {
    const videoId = getYouTubeVideoId(url);
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : 'No thumbnail';
    console.log(`URL: ${url}`);
    console.log(`Video ID: ${videoId}`);
    console.log(`Thumbnail: ${thumbnailUrl}`);
    console.log('---');
});
