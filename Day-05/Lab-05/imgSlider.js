let httpClient = new XMLHttpRequest()
httpClient.open('GET', 'https://jsonplaceholder.typicode.com/albums/1/photos')
httpClient.send()

//intilize variables
let i = 0
let multiplierSpeed = 1;
let intervalDuration = 6000
let imgText;
let imgUrls;
let img;
let p;
let imgArrObj;
let intervalId;
httpClient.onreadystatechange = function () {
    if (httpClient.readyState == 4 && httpClient.status == 200) {
        // console.log(httpClient.responseText)
        imgArrObj = JSON.parse((httpClient.responseText))
        console.log(imgArrObj.length)
        //array of Images URLs
        imgUrls = imgArrObj.map(image => image.url);
        imgText = imgArrObj.map(image => image.title)
        console.log(imgUrls.length);
        console.log(imgText)
        img = document.querySelector('#imgSlider')
        p = document.querySelector('#imgP')
        // defult speed 

        sliderOn()


        function sliderOn() {
            updateSlider()
            //Prevouse Buttin
            document.querySelector('#prevButton').addEventListener('click', function () {
                i = (i - 1 + imgUrls.length) % imgUrls.length;
                updateSlider()
            })
            //next button
            document.querySelector('#nextButton').addEventListener('click', function () {
                i = (i + 1 + imgUrls.length) % imgUrls.length;
                updateSlider()
            })

            //stop button
            document.querySelector('#stopButton').addEventListener('click', stopSlider);

            //play button
            document.querySelector('#playButton').addEventListener('click', function () {
                intervalId = setInterval(function () {
                    i = (i + 1) % imgUrls.length
                    updateSlider();
                }, intervalDuration);


            }, intervalDuration)

            //Speed 1x
            document.getElementById('speed1x').addEventListener('click', function () {
                setSpeed(1, 6000);
            });
            // speed2x
            document.getElementById('speed2x').addEventListener('click', function () {
                setSpeed(2, 4000);
            });
            // speed 3x
            document.getElementById('speed3x').addEventListener('click', function () {
                setSpeed(3, 2000);
            });
        }

        function updateSlider() {
            img.src = imgUrls[i];
            p.textContent = imgArrObj[i].title || '';
            //Print the time between each image:
            let d = new Date()
            console.log(d.getSeconds())
            console.log(i);
        }
        function stopSlider() {
            clearInterval(intervalId);
        }

        //Speed Function 
        function setSpeed(multiplier, duration) {
            stopSlider()
            multiplierSpeed = multiplier
            intervalDuration = duration
            intervalId = setInterval(function () {
                i = (i + 1) % imgUrls.length;
                updateSlider()
            }, intervalDuration)
        }




    }






};






