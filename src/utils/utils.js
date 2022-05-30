/*
export const FilterbyCamera = (current_camera,  current_photo_array) => {

    const new_array = 
}*/

export const checkDate = (currentDateSol, currentDateEarth, typeOfDate) => {

    if (typeOfDate === 'sol'){
      return currentDateSol
    }else {
      return currentDateEarth
    }
  }