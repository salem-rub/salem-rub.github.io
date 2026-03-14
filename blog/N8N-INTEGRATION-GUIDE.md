# n8n Blog Automation Guide — TechServJo

This guide explains how your n8n workflow should publish new posts to `techservjo.com/blog/`.

## How the System Works

```
n8n Workflow
    │
    ├── Step 1: Generate post content (title AR+EN, excerpt AR+EN, body AR+EN)
    ├── Step 2: Create slug (URL-friendly, e.g. "my-post-slug")
    ├── Step 3: Create HTML post file via GitHub API
    └── Step 4: Update posts.json index via GitHub API
```

After committing, GitHub Pages auto-deploys in ~1-2 minutes.

---

## Required GitHub Credential in n8n

1. Go to GitHub → Settings → Developer settings → Personal access tokens → "Fine-grained tokens"
2. Create token with access to `salem-rub/salem-rub.github.io` repo, **Contents** permission: **Read and Write**
3. Add to n8n as: **GitHub API** credential (or HTTP Header Auth with `Authorization: token YOUR_TOKEN`)

---

## Step 1: Create the HTML Post File

**n8n Node**: HTTP Request (PUT)

**URL**:  
```
https://api.github.com/repos/salem-rub/salem-rub.github.io/contents/blog/posts/{{slug}}.html
```

**Method**: PUT  
**Headers**:
```json
{
  "Authorization": "token YOUR_GITHUB_TOKEN",
  "Content-Type": "application/json"
}
```

**Body** (JSON):
```json
{
  "message": "Add blog post: {{title_ar}}",
  "content": "{{base64_encoded_html}}",
  "branch": "main"
}
```

**How to generate the HTML content**:  
- Read `blog/post-template.html` from the repo (or store it in n8n)
- Use a **Set** or **Code** node to replace all `{{PLACEHOLDER}}` tokens:

| Placeholder | Value |
|---|---|
| `{{LANG}}` | `ar` |
| `{{DIR}}` | `rtl` |
| `{{SLUG}}` | your-post-slug |
| `{{TITLE_AR}}` | Arabic title |
| `{{TITLE_EN}}` | English title |
| `{{EXCERPT_AR}}` | Arabic excerpt |
| `{{EXCERPT_EN}}` | English excerpt |
| `{{CONTENT_AR}}` | Arabic body HTML |
| `{{CONTENT_EN}}` | English body HTML |
| `{{DATE}}` | YYYY-MM-DD |
| `{{DATE_FORMATTED_AR}}` | e.g. 15 مارس 2026 |
| `{{DATE_FORMATTED_EN}}` | e.g. March 15, 2026 |
| `{{IMAGE_URL}}` | Full image URL |
| `{{AUTHOR}}` | Author name |
| `{{CATEGORY}}` | Category slug |
| `{{CATEGORY_AR}}` | Category label in Arabic |
| `{{CATEGORY_EN}}` | Category label in English |
| `{{READ_TIME_AR}}` | Number (minutes) |
| `{{READ_TIME_EN}}` | Number (minutes) |
| `{{TAGS}}` | Comma-separated tags |
| `{{TAGS_HTML}}` | `<a href="/blog/?search=Tag">Tag</a>` for each tag |
| `{{WHATSAPP_TEXT}}` | URL-encoded "Title - URL" |

- Base64 encode the final HTML string (n8n has a **Crypto** or **Code** node for this, or use `Buffer.from(html).toString('base64')` in a Code node)

---

## Step 2: Update posts.json Index

**n8n Node**: HTTP Request (GET first, then PUT)

### 2a. GET current posts.json

**URL**:
```
https://api.github.com/repos/salem-rub/salem-rub.github.io/contents/blog/posts.json
```

Save `content` (base64 decoded) and `sha` from the response.

### 2b. PUT updated posts.json

Parse decoded content as JSON, prepend new post to the array:
```json
{
  "slug": "your-post-slug",
  "title": { "ar": "...", "en": "..." },
  "excerpt": { "ar": "...", "en": "..." },
  "date": "YYYY-MM-DD",
  "author": "TechServJo Team",
  "category": "ai-automation",
  "tags": ["Tag1", "Tag2"],
  "image": "https://...",
  "lang": ["ar", "en"],
  "readTime": { "ar": 5, "en": 5 }
}
```

**URL**: Same as GET  
**Method**: PUT  
**Body**:
```json
{
  "message": "Update blog index: Add {{slug}}",
  "content": "{{base64_updated_posts_json}}",
  "sha": "{{sha_from_get_response}}",
  "branch": "main"
}
```

The `sha` is required to avoid conflicts on GitHub updates.

---

## Step 3 (Optional): Update sitemap.xml

Same pattern: GET sitemap.xml, append new `<url>` entry, PUT back with SHA.

---

## Step 4 (Optional): Update RSS feed.xml

GET feed.xml, add new `<item>` entry after `<channel>`, PUT back.

---

## n8n Workflow Template Nodes

```
[Trigger: Webhook / Schedule / AI Agent]
    → [Code: Generate bilingual content]
    → [Code: Build HTML from template]
    → [Code: Base64 encode HTML]
    → [HTTP: PUT post HTML to GitHub]
    → [HTTP: GET posts.json + sha]
    → [Code: Prepend new post to array]
    → [Code: Base64 encode updated JSON]
    → [HTTP: PUT updated posts.json to GitHub]
    → [Slack/WhatsApp: Notify "Post published!"]
```

---

## Notes

- **Slug rules**: Use lowercase letters, numbers, and hyphens only. No spaces. Example: `ai-tools-for-clinics-jordan`
- **Images**: Use Unsplash URLs or upload to your GitHub repo under `/blog/images/`  
- **GitHub Pages deploy**: ~1-2 minutes after commit for the post to go live
- **Test locally**: Open `blog/index.html` in browser to check posts render correctly before deploying
