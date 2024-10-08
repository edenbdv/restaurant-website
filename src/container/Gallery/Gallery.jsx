import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';

import './Gallery.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollref = useRef(null);

  const scroll = (direction) => {
    const {current} = scrollref;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;

    }

  }

  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instegram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop: '2rem'}}>Step into a world of culinary artistry, where each image brings to life the flavors, textures, and passion behind our dishes. Immerse yourself in the vibrant essence of authentic Italian cuisine.</p>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollref}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}> 
              <img src={image} alt="gallery"/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrow-icons' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icons' onClick={()=>scroll('right')}/>

        </div>

      </div>


    </div>
);}

export default Gallery;
