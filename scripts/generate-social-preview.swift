// Optional macOS authoring tool. The generated PNG ships as a static asset.
import AppKit

let width = 1200
let height = 630
let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height,
    bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
    colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)
func color(_ r: CGFloat, _ g: CGFloat, _ b: CGFloat) -> NSColor {
    NSColor(srgbRed: r / 255, green: g / 255, blue: b / 255, alpha: 1)
}
func text(_ value: String, x: CGFloat, y: CGFloat, size: CGFloat, color: NSColor, bold: Bool = false) {
    let font = bold ? NSFont.boldSystemFont(ofSize: size) : NSFont.systemFont(ofSize: size)
    (value as NSString).draw(at: NSPoint(x: x, y: y), withAttributes: [.font: font, .foregroundColor: color])
}
let background = color(13, 17, 23)
let foreground = color(230, 237, 243)
let muted = color(145, 152, 161)
let blue = color(68, 147, 248)
background.setFill()
NSRect(x: 0, y: 0, width: width, height: height).fill()
blue.setFill()
NSRect(x: 64, y: 498, width: 56, height: 5).fill()
text("vk.", x: 1060, y: 515, size: 40, color: blue, bold: true)
text("PLATFORM & DEVSECOPS ENGINEER", x: 64, y: 445, size: 23, color: blue, bold: true)
text("Viacheslav", x: 60, y: 325, size: 86, color: foreground, bold: true)
text("Kudinov.", x: 60, y: 225, size: 86, color: foreground, bold: true)
text("Secure delivery. Practical guardrails.", x: 64, y: 155, size: 30, color: foreground)
text("Better developer experience.", x: 64, y: 113, size: 30, color: muted)
text("Stockholm, Sweden", x: 64, y: 45, size: 22, color: muted)
text("kudinov.tech", x: 950, y: 45, size: 22, color: blue)
NSGraphicsContext.restoreGraphicsState()
let source = URL(fileURLWithPath: #filePath,
    relativeTo: URL(fileURLWithPath: FileManager.default.currentDirectoryPath, isDirectory: true))
    .standardizedFileURL
let output = source.deletingLastPathComponent().deletingLastPathComponent()
    .appendingPathComponent("site/assets/social-preview.png")
try bitmap.representation(using: .png, properties: [:])!.write(to: output)
print("Generated \(output.path)")
