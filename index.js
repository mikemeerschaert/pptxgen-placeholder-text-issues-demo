import PptxGenJS from "pptxgenjs"

const presentation = new PptxGenJS()

const slide = presentation.addSlide()

presentation.writeFile({ fileName: "example.pptx" })
