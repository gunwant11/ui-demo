import { Divider } from '@nextui-org/react'
import React, { useState } from 'react'
import { fabric } from 'fabric'

const Canvas = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)
  const [undoStack, setUndoStack] = useState<fabric.Object[]>([])

  React.useEffect(() => {
    const canvas = new fabric.Canvas('canvas')
    canvas.setWidth(1024)
    canvas.setHeight(500)
    canvas.backgroundColor = 'white'
    canvas.renderAll()
    setCanvas(canvas)

    return () => {
      canvas.dispose()
    }

  }, [])

  const draw = () => {
    if (canvas) {
      const pen = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush = pen;
      canvas.freeDrawingBrush.width = 10;
      canvas.freeDrawingBrush.color = 'red';
      canvas.isDrawingMode = true;
      canvas.requestRenderAll();
    } else {
      console.log('canvas is null');
    }
  }

  const erase = () => {
    if (canvas) {
      //@ts-ignore
      const erase = new fabric.EraserBrush(canvas)
      canvas.freeDrawingBrush = erase
      canvas.freeDrawingBrush.width = 10
      canvas.isDrawingMode = true
      canvas.requestRenderAll()
    } else {
      console.log('canvas is null')
    }
  }

  const undo = () => {
    console.log(canvas)
    const last = canvas?.getObjects().pop()
    setUndoStack([...undoStack, last as fabric.Object])
    canvas?.remove(last as fabric.Object)
    canvas?.requestRenderAll()
  }

  const addRect = () => {
    if (canvas) {
      const rect = new fabric.Rect({
        left: 100 +canvas.getObjects().length * 20,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20,
      })
      canvas.add(rect)
      canvas.requestRenderAll()
    } else {
      console.log('canvas is null')
    }
  }

  const redo = () => {
    const last = undoStack.pop()
    if (!last) return
    canvas?.add(last as fabric.Object)
    setUndoStack(undoStack)
    canvas?.requestRenderAll()
  }

  return (
    <>
      <h2 className="text-xl text-gray-400 p-2">Canvas</h2>
      <Divider />

      <div className="flex flex-row  bg-gray-700 rounded ">
        <canvas id="canvas" width="300" height="300" className='z-5 relative' ></canvas>
        <div className="flex flex-col">
          <button className="bg-blue-500 text-white p-2 m-2" onClick={draw}>
            Pen Tool
          </button>
          <button className="bg-blue-500 text-white p-2 m-2" onClick={erase}>
            Eraser Tool
          </button>
          <button className="bg-blue-500 text-white p-2 m-2" onClick={undo}>
            Undo Tool
          </button>
          <button className="bg-blue-500 text-white p-2 m-2" onClick={addRect}>
            Add Rectangle
          </button>
          <button className="bg-blue-500 text-white p-2 m-2" onClick={redo}>Redo Tool</button>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Canvas
