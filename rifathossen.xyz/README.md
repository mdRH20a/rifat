# rifathossen.xyz

Premium minimalist personal website.

---

## Edit Website Text

Open:

index.html

Change:

- Hero title
- Hero subtitle
- About section
- Contact information
- Footer information

---

## Replace Profile Image

Place your image:

images/profile.jpg

Recommended:

- JPG
- 1200px width
- Optimized size (<500KB)

No code changes required.

---

## Replace Video

Place your video:

videos/intro.mp4

Recommended:

- MP4 (H.264)
- 1080p
- Compressed

No code changes required.

---

## Add More Images

Create more image cards:

```html
<div class="image-card">
    <img src="images/photo2.jpg" alt="">
</div>
```

Place images inside:

images/
```

---

## Add More Videos

```html
<video controls>
    <source src="videos/video2.mp4">
</video>
```

Place videos inside:

videos/
```

---

## Add Blog Posts

Create a new section:

```html
<section id="blog">
</section>
```

No framework required.

---

## Add Portfolio Projects

Duplicate card blocks:

```html
<div class="card">
    New Project
</div>
```

---

## Deploy To GitHub Pages

1. Create GitHub repository
2. Upload files
3. Push repository

Go to:

Settings → Pages

Choose:

Deploy from Branch

Branch:

main

Folder:

/root

Save.

---

## Connect Custom Domain

In GitHub Pages:

Custom Domain:

rifathossen.xyz

Save.

---

## DNS Configuration

At domain provider:

A Record:

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

CNAME:

www → username.github.io

---

## Enable HTTPS

GitHub Pages:

Settings → Pages

Enable:

Enforce HTTPS

---

## Future Expansion Ideas

- Portfolio
- Timeline
- Blog
- FAQ
- Contact Form
- Downloads
- Testimonials
- Announcements
- Gallery
- Resume

---

## Performance Tips

- Compress images
- Compress videos
- Use WebP when possible
- Avoid unnecessary JavaScript
- Keep assets organized

---

## Folder Structure

```text
images/
videos/
assets/
favicon/
```

Designed to scale without rewriting the website.