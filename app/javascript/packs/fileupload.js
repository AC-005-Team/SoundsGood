import 'uppy/dist/uppy.min.css'

import {
  Core,
  FileInput,
  Informer,
  ProgressBar,
  ThumbnailGenerator,
  AwsS3,
} from 'uppy'

function fileUpload(fileInput) {
  const hiddenInput = document.querySelector('.upload-data'),
        imagePreview = document.querySelector('.upload-preview img'),
        formGroup = fileInput.parentNode

  // remove our file input in favour of Uppy's
  formGroup.removeChild(fileInput)

  const uppy = Core({
      autoProceed: true,
    })
    .use(FileInput, {
      target: formGroup,
    })
    .use(Informer, {
      target: formGroup,
    })
    .use(ProgressBar, {
      target: imagePreview.parentNode,
    })
    .use(ThumbnailGenerator, {
      thumbnailWidth: 600,
    })
    .use(AwsS3, {
      companionUrl: '/', // will call the presign endpoint on `/s3/params`
    })

  uppy.on('thumbnail:generated', (file, preview) => {
    // show preview of the image using URL from thumbnail generator
    imagePreview.src = preview
  })

  uppy.on('upload-success', (file, response) => {
    // construct uploaded file data in the format that Shrine expects
    const uploadedFileData = {
      id: file.meta['key'].match(/^cache\/(.+)/)[1], // object key without prefix
      storage: 'cache',
      metadata: {
        size: file.size,
        filename: file.name,
        mime_type: file.type,
      }
    }

    // set hidden field value to the uploaded file data so that it's submitted
    // with the form as the attachment
    hiddenInput.value = JSON.stringify(uploadedFileData)
  })
}

export default fileUpload