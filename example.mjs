/*import http from 'http'
import { createReadStream, createWriteStream } from 'fs'

//node -e 'process.stdout.write(crypto.randomBye(1e9))' > big.file
http.createServer((req, res) =>{
    createReadStream('FinalQuotes.csv')
        .pipe(res)
}).listen(3000, () => console.log('running at 3000'))*/

/*
import net from 'net'

net.createServer(socket => socket.pipe(process.stdout)).listen(3000)

//node -e "process.stdin.pipe(require('net').connect(1338))"*/

import { pipeline, Readable, Writable } from 'stream'
import { promisify } from 'util'

const pipelineAsync = promisify(pipeline)

{
    const readableStream = Readable({
        read: function () {
            this.push('Hello Dude 0 !!!!')
            this.push('Hello Dude 1 !!!!')
            this.push('Hello Dude 2 !!!!')
            this.push(null)
        }
    })
    const writebleStream = Writable({
        write (chunk, enconding, cb){
            console.log('msg', chunk.toString())
            cb()
        }
    })

    await pipelineAsync(
        readableStream,
        writebleStream
        //process.stdout
    )

    console.log('processo 01 acabou')
}
{
    const readableStream = Readable({
        reac () {
            for(let i=0; i < 1e5; i++){
                const person = {id: Date.now}
            }
        }
    })
    await pipelineAsync(
        readableStream,
        writebleStream
        //process.stdout
    )
}