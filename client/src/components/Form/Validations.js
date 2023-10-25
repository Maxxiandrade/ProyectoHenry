const Validations = (dogInfo)=>{
    let errors = {}

    if(!/^[A-Za-z]+$/.test(dogInfo.raza)){
        errors.raza = "Can't contain numbers"
    }; 
    if(isNaN(dogInfo.altMin)){
        errors.altMin = 'Must be a number'
    };
    if(isNaN(dogInfo.altMax)){
        errors.altMax = 'Must be a number'
    };
    if(dogInfo.altMin> dogInfo.altMax){
        errors.altMin = "Can't be higher than the max height!"
    };
    if(dogInfo.altMax<dogInfo.altMin){
        errors.altMax = "Can't be lower than the min height!"
    };
    if(dogInfo.pesMin>dogInfo.pesoMax){
        errors.pesMin = "Can't be higher than the max weight!"
    };
    if(dogInfo.pesMax<dogInfo.pesoMin){
        errors.pesMax = "Can't be lowe than the min height!"
    }
    if(isNaN(dogInfo.pesMin)){
        errors.pesMin = 'Must be a number'
    };
    if(isNaN(dogInfo.pesMax)){
        errors.pesMax = 'Must be a number'
    };
    if(isNaN(dogInfo.lifespan)){
        errors.weight = 'Must be a number'
    };

    return errors
};

export default Validations;