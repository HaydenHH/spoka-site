import React, { useRef, useEffect } from 'react'
import p5 from 'p5'

export default function BgCanvas() {
    const containerCnv = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let p5Ins = new p5(sketch, containerCnv.current!)
        return () => {
            p5Ins.remove()
        }
    })

    const sketch = (s: p5) => {

       

        const oriWidth = 1
        const lineSpace = 2
        let stripeWidth = 1;
        let targetWidth = 1;
        const expandWidth =5
        let spacing = 110;
        let flowSpeed = 0;
        let t = 0;
        
        s.setup = () => {
            let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
            cnv.addClass('')
            cnv.mouseOut(resetWidth)
            cnv.mouseOver(mouseOnCnv)
            s.strokeCap(s.SQUARE);
            // s.colorMode("hsl")
        };
        s.draw = () => {
            // s.background(255);
            s.clear()
            t += flowSpeed;

            s.push();
            s.translate(s.width / 2, s.height / 2);
            s.rotate(s.PI / 6);
            drawStripes(s, s.color('#efb289'), t, stripeWidth*lineSpace, spacing);
            drawStripes(s, s.color('#efb289'), t-stripeWidth*lineSpace, stripeWidth/2, spacing);
            s.pop();
            s.push();
            s.translate(s.width / 2, s.height / 2);
            s.rotate(-s.PI / 6);
            drawStripes(s, s.color('#f5e2ba'), t, stripeWidth*lineSpace, spacing);
            drawStripes(s, s.color('#f5e2ba'), t+stripeWidth*lineSpace, stripeWidth/2, spacing);
            s.pop();
            stripeWidth += (targetWidth - stripeWidth) * 0.05;
            
           
        };
        s.windowResized = () => {
            s.resizeCanvas(s.windowWidth, s.windowHeight);
        };

        const drawStripes = (
            s: p5,
            c: p5.Color,
            offset: number,
            stripeWidth: number,
            spacing: number
        ) => {
            s.stroke(c);
            s.strokeWeight(stripeWidth);
            for (let x = -s.width; x < s.width; x += spacing) {
                s.line(x + offset % spacing, -s.height, x + offset % spacing, s.height);
            }
        };

        const resetWidth = () => {
            targetWidth = 1
        }

        const mouseOnCnv = () => {
            targetWidth = expandWidth
        }

    }

    return <div ref={containerCnv} className='p-0 m-0 fixed -z-10 w-screen h-screen left-0 opacity-30'></div>
}