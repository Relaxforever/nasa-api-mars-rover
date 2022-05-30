import axios from 'axios'


const API_KEY = "PRHsAAy5ghLsfydhr7RL5co4Nx5fB2f8KZvEzk1G"
const URL_NASA = "https://api.nasa.gov/mars-photos/api/v1/rovers/"   //          curiosity/photos?sol=1000&api_key=DEMO_KEY"


export const getPhotosApiDefault = async (current_rover, currentDate, typeOfDate, page) => {


    switch (current_rover){
        case 'curiosity':
            try {
                if (typeOfDate === 'sol'){
                    const response = await axios.get(`${URL_NASA}${current_rover}/photos?sol=${currentDate}&page=${page}&api_key=${API_KEY}`)
                    return response.data
                }else{
                    const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&api_key=${API_KEY}`)
                    return response.data

                }
                
                
            } catch (error) {
                console.log(error)
            }

            break;
        case 'opportunity':
            try {
                if (typeOfDate === 'sol'){
                    const response = await axios.get(`${URL_NASA}${current_rover}/photos?sol=${currentDate}&page=${page}&api_key=${API_KEY}`)
                    return response.data
                }else{
                    const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&api_key=${API_KEY}`)
                    return response.data

                }
                
            } catch (error) {
                console.log(error)
            }

            break;
        case 'spirit':
            try {
                if (typeOfDate === 'sol'){
                    const response = await axios.get(`${URL_NASA}${current_rover}/photos?sol=${currentDate}&page=${page}&api_key=${API_KEY}`)
                    return response.data
                }else{
                    const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&api_key=${API_KEY}`)
                    return response.data

                }
                
            } catch (error) {
                console.log(error)
            }
            break;

        default:
            try {
                const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&api_key=${API_KEY}`)
                return response.data
                
            } catch (error) {
                console.log(error)
            }
    }
    
}





export const getPhotosApicamera = async (current_rover, currentDate, typeOfDate, page, camera) => {

    if (camera === 'todas'){
        const  allData = getPhotosApiDefault(current_rover, currentDate, typeOfDate, page)
        return allData
    } else {

        switch (current_rover){
            case 'curiosity':
                try {
                    if (typeOfDate === 'sol'){
                        const response = await axios.get(`${URL_NASA}${current_rover}/photos?sol=${currentDate}&page=${page}&camera=${camera}&api_key=${API_KEY}`)
                        return response.data
                    }else{
                        const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&camera=${camera}&api_key=${API_KEY}`)
                        return response.data
    
                    }
                    
                    
                } catch (error) {
                    console.log(error)
                }
    
                break;
            case 'opportunity':
                try {
                    if (typeOfDate === 'sol'){
                        const response = await axios.get(`${URL_NASA}${current_rover}/photos?sol=${currentDate}&page=${page}&camera=${camera}&api_key=${API_KEY}`)
                        return response.data
                    }else{
                        const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&camera=${camera}&api_key=${API_KEY}`)
                        return response.data
    
                    }
                    
                } catch (error) {
                    console.log(error)
                }
    
                break;
            case 'spirit':
                try {
                    if (typeOfDate === 'sol'){
                        const response = await axios.get(`${URL_NASA}${current_rover}/photos?sol=${currentDate}&page=${page}&camera=${camera}&api_key=${API_KEY}`)
                        return response.data
                    }else{
                        const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&camera=${camera}&api_key=${API_KEY}`)
                        return response.data
    
                    }
                    
                } catch (error) {
                    console.log(error)
                }
                break;
    
            default:
                try {
                    const response = await axios.get(`${URL_NASA}${current_rover}/photos?earth_date=${currentDate}&page=${page}&camera=${camera}&api_key=${API_KEY}`)
                    return response.data
                    
                } catch (error) {
                    console.log(error)
                }
        }
    }
    
    
}