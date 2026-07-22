"use client"

import { useEffect, useRef } from "react"

// A small, quiet agent-based model — separation, alignment, cohesion —
// used as the site's signature visual instead of a hero photo or banner.
// It renders on a <canvas>, in monochrome, and never asks for attention.
export default function BoidsCanvas({ count = 120, height = 260 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    let W, H, DPR
    let boids = []
    let raf

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.clientWidth
      H = canvas.clientHeight
      canvas.width = W * DPR
      canvas.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    function init() {
      boids = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
      }))
    }

    const PERC = 42
    const LINK = 46
    const INK = "21,20,15"

    function step() {
      for (const b of boids) {
        let ax = 0, ay = 0, cx = 0, cy = 0, sx = 0, sy = 0, cnt = 0
        for (const o of boids) {
          if (o === b) continue
          const dx = o.x - b.x
          const dy = o.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < PERC * PERC) {
            cnt++
            ax += o.vx
            ay += o.vy
            cx += o.x
            cy += o.y
            if (d2 < (PERC * 0.5) * (PERC * 0.5)) {
              sx -= dx
              sy -= dy
            }
          }
        }
        if (cnt > 0) {
          ax /= cnt
          ay /= cnt
          cx /= cnt
          cy /= cnt
          b.vx += (ax - b.vx) * 0.02 + (cx - b.x) * 0.0005 + sx * 0.002
          b.vy += (ay - b.vy) * 0.02 + (cy - b.y) * 0.0005 + sy * 0.002
        }
        const sp = Math.hypot(b.vx, b.vy)
        const max = 1.6
        if (sp > max) {
          b.vx = (b.vx / sp) * max
          b.vy = (b.vy / sp) * max
        }
        b.x += b.vx
        b.y += b.vy
        if (b.x < -5) b.x = W + 5
        if (b.x > W + 5) b.x = -5
        if (b.y < -5) b.y = H + 5
        if (b.y > H + 5) b.y = -5
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      ctx.lineWidth = 0.6
      for (let i = 0; i < boids.length; i++) {
        for (let j = i + 1; j < boids.length; j++) {
          const a = boids[i], b = boids[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${INK},${0.12 * (1 - d / LINK)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const b of boids) {
        const ang = Math.atan2(b.vy, b.vx)
        ctx.save()
        ctx.translate(b.x, b.y)
        ctx.rotate(ang)
        ctx.fillStyle = `rgba(${INK},0.62)`
        ctx.beginPath()
        ctx.moveTo(4, 0)
        ctx.lineTo(-3, 2.2)
        ctx.lineTo(-3, -2.2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }
    }

    function loop() {
      step()
      draw()
      raf = requestAnimationFrame(loop)
    }

    resize()
    init()
    loop()

    function onResize() {
      resize()
    }
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(raf)
    }
  }, [count])

  return (
    <figure className="mt-14 mb-2">
      <div className="border border-[var(--border)] rounded-sm bg-[#FBFAF7] overflow-hidden">
        <canvas ref={canvasRef} style={{ width: "100%", height, display: "block" }} />
      </div>
      <figcaption className="mt-2.5 text-xs text-[var(--faint)] italic" style={{ fontFamily: "var(--font-voice)" }}>
        {count} agents, three rules — separation, alignment, cohesion — and no one in charge. I like watching order show up uninvited.
      </figcaption>
    </figure>
  )
}
