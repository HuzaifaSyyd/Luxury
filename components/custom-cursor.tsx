"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add event listeners for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]')

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseDown)
        el.addEventListener("mouseleave", handleMouseUp)
      })
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    // Initial setup and on DOM changes
    addHoverListeners()

    // Use MutationObserver to detect DOM changes and add listeners to new elements
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      observer.disconnect()
    }
  }, [isVisible])

  // Don't render the custom cursor on mobile devices
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null
  }

  return (
    <div
      className={`custom-cursor ${isActive ? "active" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  )
}
