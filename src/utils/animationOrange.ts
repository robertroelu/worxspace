import p5 from 'p5';

export const animationOrange = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 991) return;

  // Variables
  let canvasWidth: number;
  let canvasHeight: number;
  let topHorizontalOffset: number = -190;
  let bottomHorizontalOffset: number = 20;
  let numStripes: number = 6; // Number of stripes

  const containerEls = document.querySelectorAll('[animation-orange]') as NodeListOf<HTMLElement>;
  if (!containerEls) return;

  const sectionElBottom = document.querySelector('.section_home-contact') as HTMLElement;
  if (sectionElBottom) {
    sectionElBottom.style.backgroundColor = 'transparent';
  }

  const sectionElTop = document.querySelector('.home_services_main-card') as HTMLElement;
  if (sectionElTop) {
    sectionElTop.style.backgroundColor = 'transparent';
  }

  containerEls.forEach((container) => {
    let pg: p5.Graphics;

    // Dynamically resize canvas based on container size
    function resizeCanvas(p: p5): void {
      if (container) {
        canvasWidth = container.offsetWidth;
        canvasHeight = container.offsetHeight;
        p.resizeCanvas(canvasWidth, canvasHeight);
        pg.resizeCanvas(canvasWidth, canvasHeight);
      }
    }

    // P5.js Setup function
    const sketch = (p: p5) => {
      p.setup = () => {
        if (container) {
          // Set initial canvas size based on container size
          canvasWidth = container.offsetWidth;
          canvasHeight = container.offsetHeight;

          p.createCanvas(canvasWidth, canvasHeight).parent(container); // Append canvas to container
          pg = p.createGraphics(canvasWidth, canvasHeight);
          p.frameRate(20); // Updated frame rate
        }
      };

      p.draw = () => {
        if (!container) return;

        // Draw on the PGraphics object
        pg.background('#FF4C0B');
        pg.fill('#F53900');
        pg.noStroke();

        // Calculate stripe spacing based on the number of stripes
        let stripeSpacing: number = canvasWidth / numStripes; // Updated stripe spacing
        let stripeWidth: number = 120; // Updated stripe width
        let speed: number = 1.5; // Updated speed
        let verticalOffset: number = (p.frameCount * speed) % pg.height; // Calculate the offset

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

        const tilesX: number = 1;
        const tilesY: number = 2;

        const tileW: number = Math.floor(p.width / tilesX);
        const tileH: number = Math.floor(p.height / tilesY);

        for (let y = 0; y < tilesY; y++) {
          for (let x = 0; x < tilesX; x++) {
            // WAVE
            const wave: number = Math.floor(Math.sin((p.frameCount + x * y) * 0.005) * 200);

            // SOURCE
            let sx: number = x * tileW + wave;
            let sy: number = y * tileH + wave;
            const sw: number = tileW;
            const sh: number = tileH;

            // DESTINATION
            let dx: number = x * tileW;
            let dy: number = y * tileH;
            const dw: number = tileW;
            const dh: number = tileH;

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

    // Initialize P5.js sketch for each container
    new p5(sketch, container);
  });
};

// import p5 from 'p5';

// export const animationOrange = () => {
//   const windowWidth = window.innerWidth;
//   if (windowWidth < 991) return;

//   // Variables
//   let canvasWidth: number;
//   let canvasHeight: number;
//   let topHorizontalOffset: number = -190; // Updated offset value
//   let bottomHorizontalOffset: number = 20;
//   let numStripes: number = 9; // Number of stripes
//   let stripeWidth: number = 60; // Updated stripe width

//   const containerEls = document.querySelectorAll('[animation-orange]') as NodeListOf<HTMLElement>;
//   if (!containerEls) return;

//   const sectionElBottom = document.querySelector('.section_home-contact') as HTMLElement;
//   if (sectionElBottom) {
//     sectionElBottom.style.backgroundColor = 'transparent';
//   }

//   const sectionElTop = document.querySelector('.home_services_main-card') as HTMLElement;
//   if (sectionElTop) {
//     sectionElTop.style.backgroundColor = 'transparent';
//   }

//   containerEls.forEach((container) => {
//     let pg: p5.Graphics;

//     // Dynamically resize canvas based on container size
//     function resizeCanvas(p: p5): void {
//       if (container) {
//         canvasWidth = container.offsetWidth;
//         canvasHeight = container.offsetHeight;
//         p.resizeCanvas(canvasWidth, canvasHeight);
//         pg.resizeCanvas(canvasWidth, canvasHeight);
//       }
//     }

//     // P5.js Setup function
//     const sketch = (p: p5) => {
//       p.setup = () => {
//         if (container) {
//           // Set initial canvas size based on container size
//           canvasWidth = container.offsetWidth;
//           canvasHeight = container.offsetHeight;

//           p.createCanvas(canvasWidth, canvasHeight).parent(container); // Append canvas to container
//           pg = p.createGraphics(canvasWidth, canvasHeight);
//           p.frameRate(18); // Updated frame rate
//         }
//       };

//       p.draw = () => {
//         if (!container) return;

//         // Draw on the PGraphics object
//         pg.background('#FF4C0B');
//         pg.fill('#F53900');
//         pg.noStroke();

//         // Calculate stripe spacing based on the number of stripes
//         let stripeSpacing: number = canvasWidth / numStripes; // Updated stripe spacing
//         let speed: number = 1.5; // Updated speed
//         let verticalOffset: number = (p.frameCount * speed) % pg.height; // Calculate the offset

//         // Draw the stripes with wrapping
//         for (let i = -pg.height; i < pg.width; i += stripeSpacing) {
//           pg.beginShape();
//           pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset);
//           pg.vertex(i + stripeWidth + bottomHorizontalOffset, pg.height - verticalOffset);
//           pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, -verticalOffset);
//           pg.vertex(i + pg.height + topHorizontalOffset, -verticalOffset);
//           pg.endShape(p.CLOSE);

//           // Draw additional stripe for seamless wrapping
//           pg.beginShape();
//           pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset + pg.height);
//           pg.vertex(
//             i + stripeWidth + bottomHorizontalOffset,
//             pg.height - verticalOffset + pg.height
//           );
//           pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, pg.height - verticalOffset);
//           pg.vertex(i + pg.height + topHorizontalOffset, pg.height - verticalOffset);
//           pg.endShape(p.CLOSE);
//         }

//         // Draw the content of PGraphics to the main canvas
//         p.image(pg, 0, 0);

//         const tilesX: number = 1;
//         const tilesY: number = 2;

//         const tileW: number = Math.floor(p.width / tilesX);
//         const tileH: number = Math.floor(p.height / tilesY);

//         for (let y = 0; y < tilesY; y++) {
//           for (let x = 0; x < tilesX; x++) {
//             // WAVE
//             const wave: number = Math.floor(Math.sin((p.frameCount + x * y) * 0.005) * 200);

//             // SOURCE
//             let sx: number = x * tileW + wave;
//             let sy: number = y * tileH + wave;
//             const sw: number = tileW;
//             const sh: number = tileH;

//             // DESTINATION
//             let dx: number = x * tileW;
//             let dy: number = y * tileH;
//             const dw: number = tileW;
//             const dh: number = tileH;

//             // Ensure source and destination are within bounds
//             sx = p.constrain(sx, 0, pg.width - sw);
//             sy = p.constrain(sy, 0, pg.height - sh);
//             dx = p.constrain(dx, 0, p.width - dw);
//             dy = p.constrain(dy, 0, p.height - dh);

//             // Apply the rectangle cutouts to the main canvas
//             p.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
//           }
//         }
//       };

//       // Handle window resizing
//       p.windowResized = () => {
//         resizeCanvas(p);
//       };
//     };

//     // Initialize P5.js sketch for each container
//     new p5(sketch, container);
//   });
// };

// import p5 from 'p5';

// export const animationOrange = () => {
//   // Variables
//   let canvasWidth: number;
//   let canvasHeight: number;
//   let topHorizontalOffset: number = -790;
//   let bottomHorizontalOffset: number = 20;

//   const containerEls = document.querySelectorAll('[animation-orange]') as NodeListOf<HTMLElement>;
//   if (!containerEls) return;

//   console.log(containerEls);

//   const sectionElBottom = document.querySelector('.section_home-contact') as HTMLElement;
//   if (sectionElBottom) {
//     sectionElBottom.style.backgroundColor = 'transparent';
//   }

//   const sectionElTop = document.querySelector('.home_services_main-card') as HTMLElement;
//   if (sectionElTop) {
//     sectionElTop.style.backgroundColor = 'transparent';
//   }

//   containerEls.forEach((container) => {
//     let pg: p5.Graphics;

//     // Dynamically resize canvas based on container size
//     function resizeCanvas(p: p5): void {
//       if (container) {
//         // canvasWidth = container.offsetWidth;
//         // canvasHeight = container.offsetHeight;
//         canvasWidth = container.offsetWidth;
//         canvasHeight = container.offsetHeight;
//         p.resizeCanvas(canvasWidth, canvasHeight);
//         pg.resizeCanvas(canvasWidth, canvasHeight);
//       }
//     }

//     // P5.js Setup function
//     const sketch = (p: p5) => {
//       p.setup = () => {
//         if (container) {
//           // Set initial canvas size based on container size
//           canvasWidth = container.offsetWidth;
//           canvasHeight = container.offsetHeight;

//           p.createCanvas(canvasWidth, canvasHeight).parent(container); // Append canvas to container
//           pg = p.createGraphics(canvasWidth, canvasHeight);
//           p.frameRate(18);
//         }
//       };

//       p.draw = () => {
//         if (!container) return;

//         // Draw on the PGraphics object
//         pg.background('#FF4C0B');
//         pg.fill('#F53900');
//         pg.noStroke();

//         // Draw flipped diagonal stripes with vertical movement
//         const stripeSpacing: number = 400; // Distance between the start of each stripe
//         const stripeWidth: number = 150; // Width of each stripe
//         const speed: number = 2; // Speed of vertical movement
//         const verticalOffset: number = (p.frameCount * speed) % pg.height; // Calculate the offset

//         // Otočenie čiar
//         for (let i = -pg.height; i < pg.width; i += stripeSpacing) {
//           pg.beginShape();
//           // Otočenie súradníc pre pruhy
//           pg.vertex(i + bottomHorizontalOffset, verticalOffset);
//           pg.vertex(i + stripeWidth + bottomHorizontalOffset, verticalOffset);
//           pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, pg.height + verticalOffset);
//           pg.vertex(i + pg.height + topHorizontalOffset, pg.height + verticalOffset);
//           pg.endShape(p.CLOSE);

//           // Draw additional stripe for seamless wrapping
//           pg.beginShape();
//           pg.vertex(i + bottomHorizontalOffset, verticalOffset - pg.height);
//           pg.vertex(i + stripeWidth + bottomHorizontalOffset, verticalOffset - pg.height);
//           pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, verticalOffset);
//           pg.vertex(i + pg.height + topHorizontalOffset, verticalOffset);
//           pg.endShape(p.CLOSE);
//         }

//         // Draw the content of PGraphics to the main canvas
//         p.image(pg, 0, 0);

//         const tilesX: number = 2;
//         const tilesY: number = 2;

//         const tileW: number = Math.floor(p.width / tilesX);
//         const tileH: number = Math.floor(p.height / tilesY);

//         for (let y = 0; y < tilesY; y++) {
//           for (let x = 0; x < tilesX; x++) {
//             // WAVE
//             const wave: number = Math.floor(Math.sin((p.frameCount + x * y) * 0.01) * 500);

//             // SOURCE
//             let sx: number = x * tileW + wave;
//             let sy: number = y * tileH + wave;
//             const sw: number = tileW;
//             const sh: number = tileH;

//             // DESTINATION
//             let dx: number = x * tileW;
//             let dy: number = y * tileH;
//             const dw: number = tileW;
//             const dh: number = tileH;

//             // Ensure source and destination are within bounds
//             sx = p.constrain(sx, 0, pg.width - sw);
//             sy = p.constrain(sy, 0, pg.height - sh);
//             dx = p.constrain(dx, 0, p.width - dw);
//             dy = p.constrain(dy, 0, p.height - dh);

//             // Apply the rectangle cutouts to the main canvas
//             p.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
//           }
//         }
//       };

//       // Handle window resizing
//       p.windowResized = () => {
//         resizeCanvas(p);
//       };
//     };

//     // Initialize P5.js sketch for each container
//     new p5(sketch);
//   });
// };

// // import p5 from 'p5';

// // export const animationOrange = () => {
// //   // Variables
// //   let canvasWidth: number;
// //   let canvasHeight: number;
// //   let topHorizontalOffset: number = -790;
// //   let bottomHorizontalOffset: number = 20;

// //   const containerEls = document.querySelectorAll('[animation-orange]') as NodeListOf<HTMLElement>; // Select all matching elements
// //   const sectionElBottom = document.querySelector('.section_home-contact') as HTMLElement;
// //   sectionElBottom.style.backgroundColor = 'transparent';

// //   const sectionElTop = document.querySelector('.home_services_main-card') as HTMLElement;
// //   sectionElTop.style.backgroundColor = 'transparent';

// //   containerEls.forEach((container) => {
// //     let pg: p5.Graphics;

// //     // Dynamically resize canvas based on container size
// //     function resizeCanvas(p: p5): void {
// //       if (container) {
// //         canvasWidth = container.offsetWidth;
// //         canvasHeight = container.offsetHeight;
// //         p.resizeCanvas(canvasWidth, canvasHeight);
// //         pg.resizeCanvas(canvasWidth, canvasHeight);
// //       }
// //     }

// //     // P5.js Setup function
// //     const sketch = (p: p5) => {
// //       p.setup = () => {
// //         if (container) {
// //           // Set initial canvas size based on container size
// //           canvasWidth = container.offsetWidth;
// //           canvasHeight = container.offsetHeight;

// //           p.createCanvas(canvasWidth, canvasHeight).parent(container); // Append canvas to container
// //           pg = p.createGraphics(canvasWidth, canvasHeight);
// //           p.frameRate(18);
// //         }
// //       };

// //       p.draw = () => {
// //         if (!container) return;

// //         // Draw on the PGraphics object
// //         pg.background('#FF4C0B');
// //         pg.fill('#F53900');
// //         pg.noStroke();

// //         // Draw flipped diagonal stripes with vertical movement
// //         const stripeSpacing: number = 400; // Distance between the start of each stripe
// //         const stripeWidth: number = 150; // Width of each stripe
// //         const speed: number = 2; // Speed of vertical movement
// //         const verticalOffset: number = (p.frameCount * speed) % pg.height; // Calculate the offset

// //         // Draw the stripes with wrapping
// //         for (let i = -pg.height; i < pg.width; i += stripeSpacing) {
// //           pg.beginShape();
// //           pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset);
// //           pg.vertex(i + stripeWidth + bottomHorizontalOffset, pg.height - verticalOffset);
// //           pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, -verticalOffset);
// //           pg.vertex(i + pg.height + topHorizontalOffset, -verticalOffset);
// //           pg.endShape(p.CLOSE);

// //           // Draw additional stripe for seamless wrapping
// //           pg.beginShape();
// //           pg.vertex(i + bottomHorizontalOffset, pg.height - verticalOffset + pg.height);
// //           pg.vertex(
// //             i + stripeWidth + bottomHorizontalOffset,
// //             pg.height - verticalOffset + pg.height
// //           );
// //           pg.vertex(i + pg.height + stripeWidth + topHorizontalOffset, pg.height - verticalOffset);
// //           pg.vertex(i + pg.height + topHorizontalOffset, pg.height - verticalOffset);
// //           pg.endShape(p.CLOSE);
// //         }

// //         // Draw the content of PGraphics to the main canvas
// //         p.image(pg, 0, 0);

// //         const tilesX: number = 2;
// //         const tilesY: number = 2;

// //         const tileW: number = Math.floor(p.width / tilesX);
// //         const tileH: number = Math.floor(p.height / tilesY);

// //         for (let y = 0; y < tilesY; y++) {
// //           for (let x = 0; x < tilesX; x++) {
// //             // WAVE
// //             const wave: number = Math.floor(Math.sin((p.frameCount + x * y) * 0.01) * 500);

// //             // SOURCE
// //             let sx: number = x * tileW + wave;
// //             let sy: number = y * tileH + wave;
// //             const sw: number = tileW;
// //             const sh: number = tileH;

// //             // DESTINATION
// //             let dx: number = x * tileW;
// //             let dy: number = y * tileH;
// //             const dw: number = tileW;
// //             const dh: number = tileH;

// //             // Ensure source and destination are within bounds
// //             sx = p.constrain(sx, 0, pg.width - sw);
// //             sy = p.constrain(sy, 0, pg.height - sh);
// //             dx = p.constrain(dx, 0, p.width - dw);
// //             dy = p.constrain(dy, 0, p.height - dh);

// //             // Apply the rectangle cutouts to the main canvas
// //             p.copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
// //           }
// //         }
// //       };

// //       // Handle window resizing
// //       p.windowResized = () => {
// //         resizeCanvas(p);
// //       };
// //     };

// //     // Initialize P5.js sketch for each container
// //     new p5(sketch);
// //   });
// // };
