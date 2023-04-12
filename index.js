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
        text: "valign: bottom",
      },
    },
  ],
})

presentation.writeFile({ fileName: "example.pptx" })
