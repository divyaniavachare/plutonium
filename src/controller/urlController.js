const shortId = require('shortid')
const validUrl = require("is-valid-http-url")
const urlModel = require('../model/urlModel')
const redis = require('redis')
const  {promisify }= require('util')

//______________________________________________________________________________________________________________________________________________________________________________

const isValid = function (value) {
    if (typeof value !== "string" || value.trim().length === 0) {
        return false;
    }
    return true;
};

//_________________________________Redis Connection & Function________________________________________________________________________________________________

const redisClient = redis.createClient(
    17416,   
    "redis-17416.c301.ap-south-1-1.ec2.cloud.redislabs.com", 
    { no_ready_check: true }
);
redisClient.auth("ocV23EoARL37Be3XZGjj6qL7FzFCDkhk", function (err) {//password
    if (err) throw err;
});

redisClient.on("connect", async function () {
    console.log("Connected to Redis..");
});

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);

//___________________________________Create Shortn URL__________________________________________________________________________________________________________


const createShortUrl = async function (req, res) {
    try {
        let data = req.body
        //check data is inside body or not
        if (Object.keys(data).length === 0) {
            return res.status(400)
                .send({ status: false, message: "required data in body" })
        }
        //checking longurl is present or not
   
          //if(!data.longUrl){
         if (!Object.keys(data).includes('longUrl')) {
            return res.status(400)
                .send({ status: false, message: "required longUrl" })
        }
        //checking data is in string format or not
        if (!isValid(data.longUrl)) {
            return res.status(400)
                .send({ status: false, message: " long url must be in string" })
        }

        //checking is valid url or not
        if (!validUrl(data.longUrl)) {
            return res.status(400)
                .send({ status: false, message: "invalid long url" })
        }

        //checking the that data is present in database 
        let isExist = await urlModel.findOne({ longUrl: data.longUrl }).select({ longUrl: 1, shortUrl: 1, urlCode: 1, _id: 0 })

        // if present sending it in response

        if (isExist) {
            return res.status(400).send({ status: false, message: "already exist", data: isExist })
        }
        let baseUrl = "http://localhost:3000/"
        data.urlCode = shortId.generate().toLocaleLowerCase()
        data.shortUrl = baseUrl + data.urlCode

        await urlModel.create(data)
        return res.status(201).send({ status: true, data: data })
    }
    catch (err) { res.status(500).send(err.message) }
}

//_____________________________________________________Get URL___________________________________________________________________________________________________________________________

const fetchUrl = async function (req, res) {
    try {
        const urlCode = req.params.urlCode

        //checking is it valid short url or not
        if (!shortId.isValid(urlCode)) {
            return res.status(400).send({ status: false, message: 'short url is invalid' })
        }

        let cacheUrlData = await GET_ASYNC(urlCode);// cache call

        if (cacheUrlData) {
            let object = JSON.parse(cacheUrlData)// converts string to obj
                console.log(cacheUrlData)
            return res.status(302).redirect(object.longUrl);

        } else {
            let urlData = await urlModel.findOne({ urlCode: urlCode })

            if (!urlData) {
                return res.status(404).send({ status: false, message: 'No URL Found' })
            }
            await SET_ASYNC(`${urlCode}`, JSON.stringify(urlData));//
            

            return res.status(302).redirect(urlData.longUrl)

        //    // {"_id":"633daee9b1c58f113758a59a",
        //    "longUrl":"https://www.google.com/search?gs_ssp=eJzj4tLP1TcoNzC2MDBVYDRgdGDw4sjJzMtOTcnMAwBRaga5&q=linkedin&oq=lonk&aqs=chrome.2.69i57j46i512j46i10i131i19",
        //    "urlCode":"e3k7zawab","shortUrl":"http://localhost:3000/e3k7zawab","createdAt":"2022-10-05T16:20:57.307Z","updatedAt":"2022-10-05T16:20:57.307Z","__v":0}

        }

    } catch (err) {
        

        res.status(500).send({ msg: err.message })
    }
}

module.exports = { createShortUrl, fetchUrl }

