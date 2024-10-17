import p5 from 'p5';

let backgroundColor: string;
let fillColor: string;

// Function to update colors dynamically
export function updateColors(newBackgroundColor: string, newFillColor: string) {
  backgroundColor = newBackgroundColor;
  fillColor = newFillColor;
}

export const animationModes = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 991) return;

  // Variables
  let pg: p5.Graphics;
  let canvasWidth: number;
  let canvasHeight: number;
  let topHorizontalOffset = -435;
  let bottomHorizontalOffset = 20;

  //   const container = document.querySelector('[animation-top]') as HTMLElement;
  const containerEls = document.querySelectorAll('[animation-top]') as NodeListOf<HTMLElement>;
  if (!containerEls) return;

  containerEls.forEach((container) => {
    function resizeCanvas(p: p5): void {
      canvasWidth = container.offsetWidth;
      canvasHeight = container.offsetHeight;
      p.resizeCanvas(canvasWidth, canvasHeight);
      pg.resizeCanvas(canvasWidth, canvasHeight);
    }

    // P5.js Setup function
    const sketch = (p: p5) => {
      p.setup = () => {
        // Set initial canvas size based on container
        canvasWidth = container.offsetWidth;
        canvasHeight = container.offsetHeight;

        p.createCanvas(canvasWidth, canvasHeight).parent(container);
        pg = p.createGraphics(canvasWidth, canvasHeight);
        p.frameRate(18);
      };

      p.draw = () => {
        // Draw on the PGraphics object
        pg.background(backgroundColor);
        pg.fill(fillColor);
        pg.noStroke();

        // Draw flipped diagonal stripes with vertical movement
        const stripeSpacing = 400; // Distance between the start of each stripe
        const stripeWidth = 150; // Width of each stripe
        const speed = 2; // Speed of vertical movement
        const verticalOffset = (p.frameCount * speed) % pg.height; // Calculate the offset

        // Draw the stripes with wrapping
        for (let i = -pg.height; i < pg.width; i += stripeSpacing) {
          pg.beginShape();
          pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset);
          pg.vertex(i + stripeWidth + bottomHorizontalOffset, pg.height - verticalOffset);
          pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, -verticalOffset);
          pg.vertex(i + pg.height + topHorizontalOffset, -verticalOffset);
          pg.endShape(p.CLOSE);

          // Draw additional stripe for seamless wrapping
          pg.beginShape();
          pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset + pg.height);
          pg.vertex(
            i + stripeWidth + bottomHorizontalOffset,
            pg.height - verticalOffset + pg.height
          );
          pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, pg.height - verticalOffset);
          pg.vertex(i + pg.height + topHorizontalOffset, pg.height - verticalOffset);
          pg.endShape(p.CLOSE);
        }

        // Draw the content of PGraphics to the main canvas
        p.image(pg, 0, 0);

        const tilesX = 2;
        const tilesY = 3;

        const tileW = Math.floor(p.width / tilesX);
        const tileH = Math.floor(p.height / tilesY);

        for (let y = 0; y < tilesY; y++) {
          for (let x = 0; x < tilesX; x++) {
            // WAVE
            const wave = Math.floor(Math.sin((p.frameCount + x * y) * 0.01) * 500);

            // SOURCE
            let sx = x * tileW + wave;
            let sy = y * tileH + wave;
            const sw = tileW;
            const sh = tileH;

            // DESTINATION
            let dx = x * tileW;
            let dy = y * tileH;
            const dw = tileW;
            const dh = tileH;

            // Ensure source and destination are within bounds
            sx = p.constrain(sx, 0, pg.width - sw);
            sy = p.constrain(sy, 0, pg.height - sh);
            dx = p.constrain(dx, 0, p.width - dw);
            dy = p.constrain(dy, 0, p.height - dh);

            // Apply the rectangle cutouts to the main canvas
            p.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
          }
        }
      };

      // Handle window resizing
      p.windowResized = () => {
        resizeCanvas(p);
      };
    };

    //   Initialize P5.js sketch
    new p5(sketch);
  });

  // Dynamically resize canvas to fit the container
  //   function resizeCanvas(p: p5): void {
  //     canvasWidth = container.offsetWidth;
  //     canvasHeight = container.offsetHeight;
  //     p.resizeCanvas(canvasWidth, canvasHeight);
  //     pg.resizeCanvas(canvasWidth, canvasHeight);
  //   }

  //   // P5.js Setup function
  //   const sketch = (p: p5) => {
  //     p.setup = () => {
  //       // Set initial canvas size based on container
  //       canvasWidth = container.offsetWidth;
  //       canvasHeight = container.offsetHeight;

  //       p.createCanvas(canvasWidth, canvasHeight).parent(container);
  //       pg = p.createGraphics(canvasWidth, canvasHeight);
  //       p.frameRate(25);
  //     };

  //     p.draw = () => {
  //       // Draw on the PGraphics object
  //       pg.background(backgroundColor);
  //       pg.fill(fillColor);
  //       pg.noStroke();

  //       // Draw flipped diagonal stripes with vertical movement
  //       const stripeSpacing = 400; // Distance between the start of each stripe
  //       const stripeWidth = 150; // Width of each stripe
  //       const speed = 2; // Speed of vertical movement
  //       const verticalOffset = (p.frameCount * speed) % pg.height; // Calculate the offset

  //       // Draw the stripes with wrapping
  //       for (let i = -pg.height; i < pg.width; i += stripeSpacing) {
  //         pg.beginShape();
  //         pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset);
  //         pg.vertex(i + stripeWidth + bottomHorizontalOffset, pg.height - verticalOffset);
  //         pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, -verticalOffset);
  //         pg.vertex(i + pg.height + topHorizontalOffset, -verticalOffset);
  //         pg.endShape(p.CLOSE);

  //         // Draw additional stripe for seamless wrapping
  //         pg.beginShape();
  //         pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset + pg.height);
  //         pg.vertex(i + stripeWidth + bottomHorizontalOffset, pg.height - verticalOffset + pg.height);
  //         pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, pg.height - verticalOffset);
  //         pg.vertex(i + pg.height + topHorizontalOffset, pg.height - verticalOffset);
  //         pg.endShape(p.CLOSE);
  //       }

  //       // Draw the content of PGraphics to the main canvas
  //       p.image(pg, 0, 0);

  //       const tilesX = 2;
  //       const tilesY = 3;

  //       const tileW = Math.floor(p.width / tilesX);
  //       const tileH = Math.floor(p.height / tilesY);

  //       for (let y = 0; y < tilesY; y++) {
  //         for (let x = 0; x < tilesX; x++) {
  //           // WAVE
  //           const wave = Math.floor(Math.sin((p.frameCount + x * y) * 0.01) * 500);

  //           // SOURCE
  //           let sx = x * tileW + wave;
  //           let sy = y * tileH + wave;
  //           const sw = tileW;
  //           const sh = tileH;

  //           // DESTINATION
  //           let dx = x * tileW;
  //           let dy = y * tileH;
  //           const dw = tileW;
  //           const dh = tileH;

  //           // Ensure source and destination are within bounds
  //           sx = p.constrain(sx, 0, pg.width - sw);
  //           sy = p.constrain(sy, 0, pg.height - sh);
  //           dx = p.constrain(dx, 0, p.width - dw);
  //           dy = p.constrain(dy, 0, p.height - dh);

  //           // Apply the rectangle cutouts to the main canvas
  //           p.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
  //         }
  //       }
  //     };

  //     // Handle window resizing
  //     p.windowResized = () => {
  //       resizeCanvas(p);
  //     };
  //   };

  // Initialize P5.js sketch
  //   new p5(sketch);
};
