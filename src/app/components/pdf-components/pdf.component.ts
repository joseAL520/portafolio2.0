import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-pdf',
  imports: [PdfViewerModule],
  templateUrl: './pdf.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfComponent { 

  @Input() infPdf!: string;
  @Input() infText!: any;
  @Input() typePdf!: string;

 abrirPDF() {

  const ruta = `docs/${this.infPdf}.pdf`;
    window.open(ruta, '_blank');
  }

abrirPDFConMarcaDeAgua() {
  const pdfUrl = `docs/${this.infPdf}.pdf`;
  const marcaAgua = 'CONFIDENCIAL';

  const nuevaVentana = window.open('', '_blank');
  if (!nuevaVentana) return;

  nuevaVentana.document.write(`
    <html>
      <head>
        <title>PDF Protegido</title>
        <style>
          body {
            margin: 0;
            background: #f4f4f4;
            overflow: auto;
            font-family: sans-serif;
            position: relative;
          }
          .marca-agua-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 100;
            pointer-events: none;
            user-select: none;
            background-image: repeating-linear-gradient(
              45deg,
              rgba(255, 0, 0, 0.15) 0,
              rgba(255, 0, 0, 0.15) 2px,
              transparent 2px,
              transparent 50px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255, 0, 0, 0.15) 0,
              rgba(255, 0, 0, 0.15) 2px,
              transparent 2px,
              transparent 50px
            );
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .marca-agua-text {
            position: absolute;
            font-size: 4rem;
            font-weight: bold;
            color: rgba(255, 0, 0, 0.15);
            transform: rotate(-30deg);
            white-space: nowrap;
            top: 30%;
            left: 10%;
          }

          canvas {
            display: block;
            margin: 0 auto;
            user-select: none;
            pointer-events: none;
            z-index: 1;
          }
        </style>
      </head>
      <body oncontextmenu="return false">
        <div class="marca-agua-bg">
          <div class="marca-agua-text">${marcaAgua}</div>
        </div>

        <canvas id="pdf-canvas"></canvas>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js"></script>
        <script>
          const canvas = document.getElementById('pdf-canvas');
          const context = canvas.getContext('2d');
          const url = '${pdfUrl}';

          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

          pdfjsLib.getDocument(url).promise.then(pdf => {
            return pdf.getPage(1);
          }).then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            page.render({
              canvasContext: context,
              viewport: viewport
            });
          });
        </script>
      </body>
    </html>
  `);
}







}
