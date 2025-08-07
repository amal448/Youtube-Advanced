const GOOGLE_API_KEY="AIzaSyAN5dhFbDMhDeGoP0a5esnBF1g5mX42vLY"
export const YOUTUBE_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY
export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_LIST_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${GOOGLE_API_KEY}&type=video&q=`