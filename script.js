const { readFile } = require("fs")
const http = require("http")
const path = require("path")
const fs = require("fs")

function detectType (filePath) {
   
       const type = path.extname(filePath)
       console.log(type)
   
       let contentType = "text/plain"
   
       if (type == ".html") {
           return contentType = "text/html"
     } else if (type == ".css") {
           return contentType = "text/css"
     } else if (type == ".js") {
           return contentType = "text/javascript"
     } else if (type == ".json") {
           return contentType = "application/json"
     } 
   
}

function sanitize(str) {
    const newInput = str.replace(/<[^>]*>/g, "")
    return newInput
}

const server = http.createServer((req,res) => {
    
    const url = req.url
    console.log(url)

    const pathName = path.join(__dirname, url === "/" ? "./index.html" : url)

    if (url === "/submit" && req.method === "POST") {

        let body = ""

        req.on("data", chunk => {
        body += chunk.toString()
        })

        req.on("end", () => {

            const params = new URLSearchParams(body)
            let name = params.get("name")
            let message = params.get("message")

            let newName = sanitize(name)
            let newMessage = sanitize(message)

            fs.appendFileSync("feedback.txt", `${newName} : ${newMessage}\n`)
            res.writeHead(302, {location: "/"})
            res.end()
        })

        return
    }

    readFile(pathName, "utf-8" , (err, data) => {

        if (err) {
            res.writeHead(404, {"content-type": "text/plain"})
            res.end("Error Occured !")
            return
        }
        const contentType = detectType(pathName)
        res.writeHead(200, {"content-type": contentType})
        res.end(data)
    })

})

server.listen(3000, () => {
    console.log("Server is Listening")
})