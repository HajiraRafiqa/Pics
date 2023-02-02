import ImageShow from "./ImageShow";


function ImageList({images})
{
  const readeredImages = images.map((image) => 
  {
    return(
      <ImageShow image = {image} />
    )
  });


  return(
    <div>
      {readeredImages}
    </div>
  )
}

export default ImageList;
