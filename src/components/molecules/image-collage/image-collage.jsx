import './image-collage.scss'

const ImageCollage = (props) => {

    const {currentphotos} = props

    return (
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
    )
}

export default ImageCollage