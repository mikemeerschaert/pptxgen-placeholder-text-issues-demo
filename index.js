import PptxGenJS from "pptxgenjs"

const presentation = new PptxGenJS()

presentation.defineSlideMaster({
  title: "margin and valign issue demo",
  background: { color: "FFFFFF" },
  objects: [
    {
      placeholder: {
        options: {
          name: "title",
          type: "body",
          x: 0.5,
          y: 0.1,
          w: 9,
          h: 1,
          valign: "bottom",
          margin: [0, 0, 0, 0],
        },
        text: "valign: bottom; margin: 0",
      },
    },
  ],
})

presentation.defineSlideMaster({
  title: "Bullet point demo",
  background: { color: "FFFFFF" },
  objects: [
    {
      placeholder: {
        options: {
          name: "Bullets",
          type: "body",
          bullet: {
            type: "bullet",
            characterCode: "25CF",
          },
          x: 0.5,
          y: 0.1,
          w: 9,
          h: 1,
          fontSize: 12,
          fontFace: "Arial",
        },
        text: "bullet 1\nbullet 2\nbullet 3",
      },
    },
  ],
})

presentation.writeFile({ fileName: "example.pptx" })
