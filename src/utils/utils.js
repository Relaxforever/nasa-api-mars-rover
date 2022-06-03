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

export const saveData = (currentDateSol, currentDateEarth, typeOfDate) => {

  if (typeOfDate === 'sol'){
    let retrievedObject = localStorage.getItem('HorarioSolar')

    if (retrievedObject){
      let new_search_array = retrievedObject.split(',');
      console.log(new_search_array)
      new_search_array.unshift(currentDateSol)
      localStorage.setItem('HorarioSolar', new_search_array.toString())
    } else {
      let new_search_array = []
      new_search_array.unshift(currentDateSol)
      localStorage.setItem('HorarioSolar', new_search_array.toString())
    }
  }
  else {
    let retrievedObject = localStorage.getItem('HorarioTerricola')
    if (retrievedObject){
      let new_search_array = retrievedObject.split(',');
      console.log(new_search_array)
      new_search_array.unshift(currentDateEarth)
      localStorage.setItem('HorarioTerricola', new_search_array.toString())
    } else {
      let new_search_array = []
      new_search_array.unshift(currentDateEarth)
      localStorage.setItem('HorarioTerricola', new_search_array.toString())
    }
    
  }

}