const Validations = (dogData)=>{
    let errors = {}

    if(isNaN(dogData.weight)){
        errors.weight = 'Must be a number'
    };
    if(isNaN(dogData.height)){
        errors.weight = 'Must be a number'
    };

    if(isNaN(dogData.lifespan)){
        errors.weight = 'Must be a number'
    };
}