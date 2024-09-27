// const { Device01_MongoClient, aggMT, aggTT, aggVV } = require('./mongoose.js')

const Device01_MongoClient = require('./mongoose.js')
const aggMT = Device01_MongoClient.db('MyCompany').collection('Device01_Motors')
const aggTT = Device01_MongoClient.db('MyCompany').collection('Device01_Transmiters')
const aggVV = Device01_MongoClient.db('MyCompany').collection('Device01_Valves')

/**
 *
 * @param {[]} data
 */
async function Device01_WriteDB(data = []) {
    console.log(`Entrou no Crd + ${data}`)
    try {

        await Device01_MongoClient.connect()
            .then(() => {
                console.log('Mongo Connected')
                aggMT.insertOne({
                    "metadata": {
                        "Demineralized Water_Id": 1, "type": "Equipament", "ProdUnit": "M³/Dia", "Job": "MyCompanie Utilities Sub Area Demineralized Water"
                    },
                    "timestamp": new Date(),

                    "Regeneration - BB01 Start Command": data[0], "Regeneration - BB01 Emergency Command": data[1],
                    "Regeneration - BB01 Maintenance Command ": data[2], "Regeneration - BB01 Auto/Manual Command ": data[3],
                    "Regeneration - BB01 Lockout Command ": data[4], "Regeneration - BB01 Output Reference": data[5],
                    "Regeneration - BB01 PLC - Output On": data[6], "Regeneration - BB01 Status Operation": data[7],
                    "Regeneration - BB01 Fault Code": data[8],

                    "Regeneration - BB02 Start Command": data[9], "Regeneration - BB02 Emergency Command": data[10],
                    "Regeneration - BB02 Maintenance Command": data[11], "Regeneration - BB02 Auto/Manual Command": data[12],
                    "Regeneration - BB02 Lockout Command": data[13], "Regeneration - BB02 Output Reference": data[14],
                    "Regeneration - BB02 Output On": data[15], "Regeneration - BB02 Status Operation": data[16],
                    "Regeneration - BB02 Fault Code": data[17],

                    "Filtration/Wash - BB03 Start Command": data[18], "Filtration/Wash - BB03 Emergency Command": data[19],
                    "Filtration/Wash - BB03 Maintenance Command": data[20], "Filtration/Wash - BB03 Auto/Manual Command": data[21],
                    "Filtration/Wash - BB03 Lockout Command": data[22], "Filtration/Wash - BB03 Output Reference": data[23],
                    "Filtration/Wash - BB03 Output On": data[24], "Filtration/Wash - BB03 Status Operation": data[25],
                    "Filtration/Wash - BB03 Fault Code": data[26],

                    "Filtration/Wash - BB04 Start Command": data[27], "Filtration/Wash - BB04 Emergency Command": data[28],
                    "Filtracao/Wash  - BB04 Maintenance Command": data[29], "Filtration/Wash - BB04 Auto/Manual Command": data[30],
                    "Filtration/Wash - BB04 Lockout Command": data[31], "Filtration/Wash - BB04 Output Reference": data[32],
                    "Filtration/Wash - BB04 Output On": data[33], "Filtration/Wash - BB04 Status Operation": data[34],
                    "Filtration/Wash - BB04 Fault Code": data[35],

                    "Hydrochloric Acid Dosage - BB05 Start Command": data[36], "Dosadora Hydrochloric Acid Dosage - BB05 Emergency Command": data[37],
                    "Hydrochloric Acid Dosage - BB05 Maintenance Command": data[38], "Dosadora Hydrochloric Acid Dosage - BB05 Auto/Manual Command": data[39],
                    "Hydrochloric Acid Dosage- BB05 Comando Locout": data[40], "Dosadora Hydrochloric Acid Dosage - BB05 Output On": data[42],
                    "Hydrochloric Acid Dosage - BB05 Status Operation": data[43], "Dosadora Hydrochloric Acid Dosage - BB05 Fault Code": data[44],

                    "Caustic Soda Dosage - BB06 Start Command": data[45], "Caustic Soda Dosage- BB06 Emergency Command": data[46],
                    "Caustic Soda Dosage - BB06 Maintenance Command": data[47], "Caustic Soda Dosage - BB06 Auto/Manual Command": data[48],
                    "Caustic Soda Dosage - BB06 Lockout Command": data[49], "Caustic Soda Dosage - BB06 Output On": data[51],
                    "Caustic Soda Dosage - BB06 Status Operation": data[52], "Caustic Soda Dosage - BB06 Fault Code": data[53],

                },
                )

                aggTT.insertOne({
                    "metadata": {
                        "Demineralized Water_Id": 1, "type": "Equipament", "ProdUnit": "M³/Dia", "Job": "Recepção A"
                    },
                    "timestamp": new Date(),
                    "Entrada TRC001 - FT01": data[54], "Demineralized Water Soda Dilution Flow  - FT02": data[55],
                    "Demineralized Water Hydrochloric Acid Dilution Flow  - FT03": data[56],

                    "Succion Pressure Pumps - PT01": data[57],"Pressure Input TRC001 - PT02": data[58],
                    "Pressure Out TRC001 - PT03": data[59], "Pressure Input TRC002 - PT04": data[60],
                    "Pressure Out TRC002 - PT05": data[61], "Pressure Input TRC003 - PT06": data[62],
                    "Pressure Out TRC003 - PT06": data[63],

                    "TanK Demineralized Water Level - LT01": data[64]
                },
                )

                aggVV.insertOne({
                    "metadata": {
                        "Demineralized Water_Id": 1, "type": "Equipament", "ProdUnit": "M³/Dia", "Job": "Recepção A"
                    },
                    "timestamp": new Date(),

                    "Water Input TRC001 - XV01 Start Command": data[65], "Water Input TRC001 - XV01 Comando Manut": data[66],
                    "Water Input TRC001 - XV01 Auto/Manual Command": data[67], "Water Input TRC001 - XV01 Close Status": data[68],
                    "Water Input TRC001 - XV01 Open Status": data[69], "Water Input TRC001 - XV01 Alarm on Opening": data[70],
                    "Water Input TRC001 - XV01 Alarm on Closing": data[71],

                    "Water Input BackWash - TRC001 - XV02 Start Command": data[72], "Water Input BackWash - TRC001 - XV02 Comando Manut": data[73],
                    "Water Input BackWash - TRC001 - XV02 Auto/Manual Command": data[74], "Water Input BackWash - TRC001 - XV02 Close Status": data[75],
                    "Water Input BackWash - TRC001 - XV02 Open Status": data[76], "Water Input BackWash - TRC001 - XV02 Alarm on Opening": data[77],
                    "Water Input BackWash - TRC001 - XV02 Alarm on Closing": data[78],

                    "Water Output BackWash - TRC001 - XV03 Start Command": data[79], "Water Output BackWash - TRC001 - XV03 Comando Manut": data[80],
                    "Water Output BackWash - TRC001 - XV03 Auto/Manual Command": data[81], "Water Output BackWash - TRC001 - XV03 Close Status": data[82],
                    "Water Output BackWash - TRC001 - XV03 Open Status": data[83], "Water Output BackWash - TRC001 - XV03 Alarm on Opening": data[84],
                    "Water Output BackWash - TRC001 - XV03 Alarm on Closing": data[85],

                    "Water Output TRC001 - XV04 Start Command": data[86], "Water Output TRC001 - XV04 Comando Manut": data[87],
                    "Water Output TRC001 - XV04 Auto/Manual Command": data[88], "Water Output TRC001 - XV04 Close Status": data[89],
                    "Water Output TRC001 - XV04 Open Status": data[90], "Water Output TRC001 - XV04 Alarm on Opening": data[91],
                    "Water Output TRC001 - XV04 Alarm on Closing": data[92],

                    "Sample Flow Blockage - XV05 Start Command": data[93], "Sample Flow Blockage - XV05 Comando Manut": data[94],
                    "Sample Flow Blockage - XV05 Auto/Manual Command": data[95], "Sample Flow Blockage - XV05 Close Status": data[96],
                    "Sample Flow Blockage - XV05 Open Status": data[97], "Sample Flow Blockage - XV05 larme na Abertura": data[98],
                    "Sample Flow Blockage - XV05 Alarm on Closing": data[99],

                    "Regeneration Out TRC001 - XV06 Start Command": data[100], "Regeneration Out TRC001 - XV06 Comando Manut": data[101],
                    "Regeneration Out TRC001 - XV06 Auto/Manual Command": data[102], "Regeneration Out TRC001 - XV06 Close Status": data[103],
                    "Regeneration Out TRC001 - XV06 Open Status": data[104], "Regeneration Out TRC001 - XV06 larme na Abertura": data[105],
                    "Regeneration Out TRC001 - XV06 Alarm on Closing": data[106],

                    "Vent TRC001 - XV07 Start Command": data[107], "Vent TRC001 - XV07 Comando Manut": data[108],
                    "Vent TRC001 - XV07 Auto/Manual Command": data[109], "Vent TRC001 - XV07 Close Status": data[110],
                    "Vent TRC001 - XV07 Open Status": data[111], "Vent TRC001 - XV07 Alarm on Opening": data[112],
                    "Vent TRC001 - XV07 Alarm on Closing": data[113],

                    "Water Input com Ácido TRC001 - XV08 Start Command": data[114], "Water Input com Ácido TRC001 - XV08 Comando Manut": data[115],
                    "Water Input com Ácido TRC001 - XV08 Auto/Manual Command": data[116], "Water Input com Ácido TRC001 - XV08 Close Status": data[117],
                    "Water Input com Ácido TRC001 - XV08 Open Status": data[118], "Water Input com Ácido TRC001 - XV08 Alarm on Opening": data[119],
                    "Water Input com Ácido TRC001 - XV08 Alarm on Closing": data[120],
                },
                )
            },)
            .catch((e) => {
                console.log('error :' + e)
            })

    }
    catch (e) {
        console.log(e)
    }

}

module.exports = Device01_WriteDB


