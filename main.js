song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

    function preload()
    {
        song = loadSound("music.mp3")
    }

    function setup()
    {
        canvas = createcanvas(600,500);
        canvas.center();
        video= createcapture(VIDEO);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        posenet.on('pose', gotposes);
    }

    function gotposes(results) 
    {
        if(results.length > 0)
        {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y; 
            console.log("leftWristX =" + leftWristX +"leftWristY =" + leftWristY)
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            console.log("rightWristX =" + rightWristX +"rightWristY =" + rightWristY)
        }
        }

        function modelLoaded()
        { 
            console.log('Posenet is initialized');
        }

        function draw() 
        {
        image(video,0,0,600,500);
        }
                         
    function play()
    {
        song.play();
        song.setVolume(1);
        song.rate(1);
    }