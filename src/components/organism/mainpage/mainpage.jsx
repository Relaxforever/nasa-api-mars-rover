/* eslint-disable react-hooks/exhaustive-deps */
import React,  {useState, useEffect}  from 'react'
import './mainpage.scss'
import  { getPhotosApiDefault, getPhotosApicamera } from '../../../services/nasaApi'
import { checkDate } from '../../../utils/utils'




const MainPage = () => {
  let datetime = new Date()

  const  [currentRover,setCurrentRover]  = useState('curiosity');
  const [currentphotos, setCurrentPhotos] =  useState();
  const [typeOfDate, setCurrentTypeOfDate] = useState('earth');
  const [currentDateEarth, setCurrentDateEarth] = useState(`${datetime.getFullYear()}-${datetime.getMonth() /*+ 1*/}-${datetime.getDate()}`);
  const [currentDateSol, setCurrentDateSol] = useState(1000);
  const [currentCamera, setCurrentCamara] = useState('todas')
  const [page, setPage] = useState(1);

 
  const HandleClickPlus = () => {
    setPage(page  +  1);
   // SearchAway()
    setCurrentCamara('todas')
  }
  const HandleClickLess = () => {
    setPage(page  -  1);
    //SearchAway()
    setCurrentCamara('todas')

  }

  const SearchAway =  async () => {
    const NasaPhotos =  await  getPhotosApiDefault(currentRover, checkDate(currentDateSol, currentDateEarth, typeOfDate), typeOfDate, page)
    setCurrentPhotos(NasaPhotos)
  }
    


    useEffect(() => {
    const showPhotosDefault = async () => {

      const NasaPhotos =  await  getPhotosApiDefault(currentRover, checkDate(currentDateSol, currentDateEarth, typeOfDate), typeOfDate, page)
      setCurrentPhotos(NasaPhotos)
    }
   
    showPhotosDefault()
    
    }, [currentRover, page])


    useEffect(() => {
      const showPhotosDefault = async () => {
  
        const NasaPhotos =  await  getPhotosApicamera(currentRover, checkDate(currentDateSol, currentDateEarth, typeOfDate), typeOfDate, page, currentCamera)
        
        setCurrentPhotos(NasaPhotos)
      }
     
      showPhotosDefault()
      
      }, [currentCamera])



    return (
        <>
        <div  className="o-mainpage">
        <div className='o-mainpage-currentRover-cont'>
          <div className={currentRover === 'curiosity' ? 'selected' : 'o-mainpage-currentRover-cont-robot'} onClick={() => {setCurrentRover('curiosity')}}><h2>Curiosity</h2></div>
          <div className={currentRover === 'opportunity' ? 'selected' : 'o-mainpage-currentRover-cont-robot'} onClick={() => {setCurrentRover('opportunity')}}><h2>Opportunity</h2></div> 
          <div className={currentRover === 'spirit' ? 'selected' : 'o-mainpage-currentRover-cont-robot'} onClick={() => {setCurrentRover('spirit')}}><h2>Spirit</h2></div>
          </div>

          <div className="o-mainpage-cont">
            <div className='o-mainpage-cont-searcher'>
              <input type='radio' name='date_of_search' value='sol' onChange={(e) => setCurrentTypeOfDate(e.target.value)}></input><label>Horario Solar</label>
              <input type='radio' name='date_of_search' value='earth' defaultChecked onChange={(e) => setCurrentTypeOfDate(e.target.value)} ></input><label>Horario Terricola</label>

              {typeOfDate === 'earth' ? (<div className='o-mainpage-cont-searcher-input'>
                <label>Ingresa el horario terricola YYYY-MM-DD</label>
                <input type='text' placeholder={currentDateEarth} onChange={(e) => setCurrentDateEarth(e.target.value)}/>
              </div>) : (
                <div className='o-mainpage-cont-searcher-input'>
                <label>Ingresa el horario sol</label>
                <input type='number'  placeholder={currentDateSol} onChange={(e) => setCurrentDateSol(e.target.value)}/>
              </div>
              )}
              <button className='o-mainpage-cont-searcher-button' onClick={()  => SearchAway()}>Buscar!</button>
            </div>


              {currentphotos !== undefined ? (
                <>
                <div className='o-mainpage-cont-images-text'>
                  {currentRover === 'opportunity' ? (<div className='o-mainpage-cont-images-text-advice'><h3>El Opportunity se declaro oficialmente terminado en Junio 10, 2018</h3></div>) :  ''}
                  {currentRover === 'spirit' ? (<div className='o-mainpage-cont-images-text-advice'><h3>El spirit se declaro oficialmente terminado en Marzo 22, 2010</h3></div>) :  ''}
                </div>
                <div className='o-mainpage-currentRover-cont'>
                  {currentRover === 'curiosity' ? 
                  (<>
                    <div className={currentCamera === 'fhaz' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('fhaz')}><h4>FHAZ</h4></div>
                    <div className={currentCamera === 'rhaz' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('rhaz')}><h4>RHAZ</h4></div>
                    <div className={currentCamera === 'mast' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('mast')}><h4>MAST</h4></div>
                    <div className={currentCamera === 'chemcam' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('chemcam')}><h4>CHEMCAM</h4></div>
                    <div className={currentCamera === 'mahli' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('mahli')}><h4>MAHLI</h4></div>
                    <div className={currentCamera === 'mardi' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('mardi')}><h4>MARDI</h4></div>
                    <div className={currentCamera === 'navcam' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('navcam')}><h4>NAVCAM</h4></div>
                    <div className={currentCamera === 'todas' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('todas')}><h4>Todas</h4></div>
                  </>) : currentRover === 'opportunity' ? 
                  (<>
                    <div className={currentCamera === 'fhaz' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('fhaz')}><h4>FHAZ</h4></div>
                    <div className={currentCamera === 'rhaz' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('rhaz')}><h4>RHAZ</h4></div>
                    <div className={currentCamera === 'navcam' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('navcam')}><h4>NAVCAM</h4></div>
                    <div className={currentCamera === 'pancam' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('pancam')}><h4>PANCAM</h4></div>
                    <div className={currentCamera === 'minites' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('minites')}><h4>MINITES</h4></div>
                    <div className={currentCamera === 'todas' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('todas')}><h4>Todas</h4></div>
                    </>) : currentRover === 'spirit' ?  
                    (<>
                    <div className={currentCamera === 'fhaz' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('fhaz')}><h4>FHAZ</h4></div>
                    <div className={currentCamera === 'rhaz' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('rhaz')}><h4>RHAZ</h4></div>
                    <div className={currentCamera === 'navcam' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('navcam')}><h4>NAVCAM</h4></div>
                    <div className={currentCamera === 'pancam' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('pancam')}><h4>PANCAM</h4></div>
                    <div className={currentCamera === 'minites' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('minites')}><h4>MINITES</h4></div>
                    <div className={currentCamera === 'todas' ? 'selected-camara' :'o-mainpage-currentRover-cont-camera'} onClick={() => setCurrentCamara('todas')}><h4>Todas</h4></div>
                    </>) : (<></>)}
                
        
                </div>
                

                <div className='o-mainpage-cont-images'>
                  {currentphotos !== undefined && currentphotos.photos.length !== 0 ? (
                    currentphotos.photos.map((elem, idx) => (
                      <div className='o-mainpage-cont-images-cont' key={idx}>
                        <div className='o-mainpage-cont-images-cont-img'>
                          <img src={elem.img_src} alt={'FotoMarte-' + elem.id}/>
                        </div>
                        <div className='o-mainpage-cont-images-cont-text'>
                        <p> Foto tomada en horario tierra el dia {elem.earth_date}</p>
                        <p> Foto tomada con la Camara  {elem.camera.name}</p>
                        </div>

                      </div>
                    ))
                  ) : ""}
                </div>
                <div className='o-mainpage-cont-buttons'>

                  {page !== 1 ? <div className='o-mainpage-cont-buttons-text' onClick={() => HandleClickLess()}><p>Atras</p></div>  : ''}
                  <div className='o-mainpage-cont-buttons-text' ><p>Pagina {page}</p></div>
                  <div className='o-mainpage-cont-buttons-text' onClick={() => HandleClickPlus()}><p>Siguiente</p></div>
                  

                </div>
                </>
                
              ): ''}

            </div>
  
        </div>
  
  
  
        </>
      );


}
export default MainPage;