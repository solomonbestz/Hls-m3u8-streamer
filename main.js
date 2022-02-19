var videoSrcHls = "https://h5.ustvgo.la/AMC/myStream/chunks.m3u8?nimblesessionid=62580081&wmsAuthSign=c2VydmVyX3RpbWU9Mi8xOS8yMDIyIDQ6NDY6MjUgUE0maGFzaF92YWx1ZT1LMVdaRXJmd2o5bGp1NmZKUThLMEdBPT0mdmFsaWRtaW51dGVzPTI0MA=="
var videoSrcInMp4 = "https://drive.google.com/file/d/1X7r91eovlj74oiO4Nx5XOFGkSs0p6i5j/view?usp=sharing"

var player = new Clappr.Player({
    source: videoSrcHls,
    parentId: "#player"});
    // [autoPlay= true]);