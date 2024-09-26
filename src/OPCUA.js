const Device01_WriteDB = require("./db/Device01Crd.js")
const opcua = require('node-opcua')
const itemsToMonitor  = require("./db/Device01.js")
const endpoints = "opc.tcp://192.168.1.13:4840"
const {ClientSession} =  require('node-opcua')

const client = opcua.OPCUAClient.create(
    {
        applicationName: "PLC-40/Tls-1",
        connectionStrategy: {
            initialDelay: 1000,
            maxRetry: 1
        },
        securityMode: opcua.MessageSecurityMode = "None",
        securityPolicy: opcua.SecurityPolicy = "None",
        endpointMustExist: false
    })

class OpcuaClient {
    constructor() {

        client.on('connected', () => {
            console.log('OPCUA Server Partner is connected')
        })

        client.on('connection_failed', () => {
            console.log('First Connection is fail')
        })

        client.on('backoff', async (retry, delay) => {

            console.log(`Try to connect to ${endpoints},${retry} next attemp in ${delay / 1000} sec`)
        })

        client.on('start_reconnection', () => {
            console.log('Start Reconnect')
        })

        client.on('reconnection_attempt_has_failed', (err, message) => {
            console.log(`Error to reconnect with OPCUA Server Partner: ${err}`)
        })

        client.on('after_reconnection', (err) => {
            var msg = err ? console.log(err) : console.log('Reconnected') + this.createsession()
        })
        client.on('abort', () => {
            console.log('OPCUA Server Partner refuse request for connection')
        })

        client.on('close', () => {
            console.log('OPCUA Server Partner connection is closed') + this.createsession()
        })

        client.on('timed_out_request', (request) => {
            console.log("request has timed out without receiving", request)
        })
    }

    clienteconnect() {

        client.connect(endpoints, (err) => {
            var msg = err ? console.log(`Cannot to connect to endpoint partner ${endpoints}`)
                : console.log(`Connected to endpoint partner ${endpoints}`)
            this.createsession()
        })
    }

    createsession() {

        client.createSession((err, session) => {
session.createSubscription2()
            if (err) { return err }
            var the_session = session
            console.log(`Session Created`)

            this.readvariables(session)
        })
    }
/**
 *
 * @param {ClientSession} session
 */
    readvariables(session) {

        const ids = [...itemsToMonitor]
        const data = []
        ids.forEach(async function (id) {
            var nodeId = 'ns=3;s=' + id
            session.read({ nodeId: opcua.resolveNodeId(nodeId), attributeId: opcua.AttributeIds.Value }, (err, dataValue) => {
                data.push(dataValue.value.value)
                if (data.length >= itemsToMonitor.length) {
                    Device01_WriteDB(data)
                }
            })
        })
        this.close(session)
    }
    /**
 *
 * @param {ClientSession} session
 */
    close(session){
        client.closeSession(session,true,(err)=>{
            var msg = err?console.log(`Error: ${err}`):console.log('Session Closed OK') + setTimeout(() => {
                this.createsession()
            }, 2000);
        })
    }
}

const PLC_Utilidades = new OpcuaClient()

setTimeout(() => {
    PLC_Utilidades.clienteconnect()
},1500);

