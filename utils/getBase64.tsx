import { fabric } from 'fabric'

export const createCanvasToBase64 = (imageUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = new fabric.Canvas('canvas', {
      width: 1024,
      height: 1024,
    })

    const pugImg = new Image()
    pugImg.onload = function () {
      const imgInstance = new fabric.Image(pugImg, {
        left: 0,
        top: 0,
      })
      canvas.add(imgInstance)
      const base64Image = canvas.toDataURL({
        format: 'png',
        quality: 1,
      })

      resolve(base64Image)
    }

    pugImg.onerror = function () {
      reject(new Error('Failed to load image.'))
    }

    pugImg.src = imageUrl
  })
}

export const generateMaskBase64 = (imageUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = new fabric.Canvas('canvas2', {
      width: 1024,
      height: 1024,
    })

    canvas.backgroundColor = 'white'

    const pugImg = new Image()
    pugImg.onload = function () {
      const imgInstance = new fabric.Image(pugImg, {
        left: 0,
        top: 0,
      })

      const mask = new fabric.Rect({
        top: 0,
        left: 0,
        fill: 'black',
        width: imgInstance.width as number,
        height: imgInstance.height as number,
        clipPath: imgInstance,
      })
      imgInstance.left = (-1 * (imgInstance.width as number)) / 2
      imgInstance.top = (-1 * (imgInstance.height as number)) / 2
      canvas.add(mask)
      // Convert the canvas to a base64 image
      const base64Image = canvas.toDataURL({
        format: 'png',
        quality: 1,
      })

      resolve(base64Image)
    }

    pugImg.onerror = function () {
      reject(new Error('Failed to load image.'))
    }

    pugImg.src = imageUrl
  })
}
