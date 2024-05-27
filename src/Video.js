import Rp from 'react-player/youtube';

export default function Video() {
    return (
        <div className="Video">
            <Rp url='https://www.youtube.com/shorts/cBio_XL8Yms' />
            <Rp url='https://www.youtube.com/watch?v=G-wjEQx8WnI' controls={true} />
            <video src='https://www.youtube.com/watch?v=G-wjEQx8WnI' controls/> 
            {/* This doesnot work because video html can't handle videos from streaming medias while ReactPlayer can handle all!  */}
        </div>
    );
  }