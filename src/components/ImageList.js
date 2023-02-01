import ImageShow from "./ImageShow";


function ImageList({images})
{
  const readeredImages = images.map((image) => 
  {
    return(
      <ImageShow /> 
    )
  });


  return(
    <div>
      ImageList: {images.length}
    </div>
  )
}

export default ImageList;
