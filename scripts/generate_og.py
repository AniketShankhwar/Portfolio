"""Generate public/og.jpg (1200x630) for link unfurls.

Matches the site's design system:
- Background: near-black oklch(0.08 0.003 0)  -> approx #131313
- Accent:      copper  oklch(0.65 0.15 40)   -> approx #D08A49
- Fonts:       uses whatever it can find; falls back to default sans
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import glob
import os

W, H = 1200, 630
BG = (19, 19, 19)
CARD = (26, 26, 26)
COPPER = (208, 138, 73)
COPPER_DEEP = (176, 108, 55)
FG = (238, 238, 236)
MUTED = (165, 165, 163)


def find_font(size, bold=False):
    candidates = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def radial_blob(img, cx, cy, radius, color, max_alpha):
    """Soft radial gradient blob painted onto an RGBA overlay."""
    scale = 8  # draw small, blur up
    sw = max(1, radius * 2 // scale)
    overlay = Image.new("L", (sw, sw), 0)
    d = ImageDraw.Draw(overlay)
    d.ellipse([0, 0, sw - 1, sw - 1], fill=max_alpha)
    overlay = overlay.resize((radius * 2, radius * 2), Image.BILINEAR)
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius // 10))
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    solid = Image.new("RGBA", overlay.size, color + (255,))
    layer.paste(solid, (cx - radius, cy - radius), overlay)
    return Image.alpha_composite(img, layer)


img = Image.new("RGBA", (W, H), BG + (255,))

# Ambient depth: faint copper glow top-left, neutral elevation bottom-right
img = radial_blob(img, -80, -60, 520, COPPER_DEEP, 26)
img = radial_blob(img, 320, 40, 300, COPPER, 14)
img = radial_blob(img, 1180, 660, 480, (30, 30, 30), 60)

draw = ImageDraw.Draw(img)

# Top bar: faux window dots (matches the hero card chrome)
dot_y = 64
for i, color in enumerate([(217, 91, 79), (224, 172, 79), (139, 195, 106)]):
    x = 72 + i * 36
    draw.ellipse([x, dot_y, x + 14, dot_y + 14], fill=color + (200,))

# Right-aligned terminal tag, monospace feel
tag_font = find_font(24)
draw.text((W - 72, dot_y - 4), "developer.js", font=tag_font, fill=MUTED + (160,), anchor="ra")

# Hairline under the chrome
draw.line([(72, 110), (W - 72, 110)], fill=FG + (26,), width=2)

# Name
name_font = find_font(88, bold=True)
draw.text((72, 150), "Aniket Shankhwar", font=name_font, fill=FG)

# Title with copper accent
title_font = find_font(60, bold=True)
title = "Full Stack Developer"
bbox = draw.textbbox((0, 0), title, font=title_font)
tw = bbox[2] - bbox[0]
draw.text((72, 264), title, font=title_font, fill=COPPER)

# Underline accent beneath title
draw.rounded_rectangle([74, 356, 74 + tw, 362], radius=3, fill=COPPER + (220,))

# Tagline
tagline_font = find_font(30)
draw.text(
    (72, 396),
    "Building scalable, production-ready web applications",
    font=tagline_font,
    fill=MUTED,
)

# Stack row
stack_font = find_font(26)
stack = "React  ·  Next.js  ·  Node.js  ·  PostgreSQL"
draw.text((72, 460), stack, font=stack_font, fill=lerp(MUTED, FG, 0.35))

# Site URL, bottom-right
draw.text((W - 72, H - 64), "aniket-shankhwar.dev", font=stack_font, fill=COPPER + (230,), anchor="rs")

# Availability dot (matches the site's emerald ping)
dot_x, dot_y2 = 72, H - 58
draw.ellipse([dot_x, dot_y2, dot_x + 16, dot_y2 + 16], fill=(52, 211, 153))
draw.text((dot_x + 32, dot_y2 - 2), "Open to opportunities", font=stack_font, fill=MUTED)

# Border frame, copper-tinted, very subtle
draw.rounded_rectangle([24, 24, W - 24, H - 24], radius=28, outline=COPPER + (70,), width=2)

img = img.convert("RGB")
img.save("public/og.jpg", quality=90, optimize=True)
print("wrote public/og.jpg", img.size)
