

class CheckRequestBodyProvider {
    execute(necessaryInfo: string[], requestBody: string){
        let missingInfo = []

        necessaryInfo.forEach((info : string) =>{
            if(!Object.keys(requestBody).find(key => key === info)){
                missingInfo.push(info)
            }
        })

        if(missingInfo.length > 0){
            throw new Error(`"Missing infos: ${missingInfo}`)
        }
    }
}

export { CheckRequestBodyProvider }