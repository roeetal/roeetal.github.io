# Personal Website

## Design

```text
pages-container
└─── page
    └─── text
        └─── heading
        └─── body
    └───image-container
        └─── image
```

### `page`:
- `init`: opacity = 0, starting position before transition
- `animate`: opacity = 1, start transition
- Use background image or `image`

### `text`:
- `delayed`: delay transition
- `pan-`{`left` or `right`}: text alignment

### `image-container`: (optional)
- Use when not using background image

## Style

- `h1`: navbar
- `h2`: heading
- `p`: body
- `h3`: footnote for technical details
- `a`: link

Credit:
- Sam Ingersoll
- Ahmed Eissa
