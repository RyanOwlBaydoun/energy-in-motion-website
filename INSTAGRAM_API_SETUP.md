# Instagram API Setup Guide

This guide explains how to set up Instagram Basic Display API integration to fetch real posts from @coachsarahdaou.

## Current Status

✅ **Layout Changes Completed:**

- "Sarah on Instagram" moved right by 10%
- Red line made 20% smaller
- Responsive design maintained

✅ **API Integration Ready:**

- API route created at `/api/instagram-posts`
- Component updated to fetch real posts
- Fallback to mock data when API unavailable

## Instagram Basic Display API Setup

### Step 1: Create Facebook App

1. Go to [Facebook for Developers](https://developers.facebook.com/)
2. Click "Create App" and select "Consumer" type
3. Fill in app details and create the app

### Step 2: Add Instagram Basic Display

1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Go to Instagram Basic Display > Basic Display

### Step 3: Configure Settings

1. **Valid OAuth Redirect URIs:**

   ```
   https://yourdomain.com/auth/instagram/callback
   http://localhost:3000/auth/instagram/callback (for development)
   ```

2. **Deauthorize Callback URL:**

   ```
   https://yourdomain.com/auth/instagram/deauthorize
   ```

3. **Data Deletion Request URL:**
   ```
   https://yourdomain.com/auth/instagram/delete-data
   ```

### Step 4: Create Instagram Test User

1. Go to Instagram Basic Display > Basic Display
2. Scroll to "User Token Generator"
3. Click "Add or Remove Instagram Testers"
4. Add the Instagram account (@coachsarahdaou)
5. The Instagram user must accept the invitation

### Step 5: Generate Access Token

1. In "User Token Generator" section
2. Click "Generate Token" next to the test user
3. Copy the generated access token
4. For long-lived tokens (60 days), exchange short-lived token:

```bash
curl -i -X GET "https://graph.instagram.com/access_token
  ?grant_type=ig_exchange_token
  &client_secret={instagram-app-secret}
  &access_token={short-lived-access-token}"
```

### Step 6: Environment Configuration

Create a `.env.local` file in your project root:

```env
# Instagram Basic Display API
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
```

## API Endpoints Used

The integration uses these Instagram Graph API endpoints:

```
GET https://graph.instagram.com/me/media
  ?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp
  &limit=5
  &access_token={access-token}
```

## Features

### ✅ Current Implementation

- Fetches 5 most recent posts
- Supports IMAGE, VIDEO, and CAROUSEL_ALBUM types
- Displays proper thumbnails
- Includes captions and permalinks
- Graceful fallback to mock data
- 1-hour server-side caching
- Loading states and error handling

### 🔄 Automatic Behavior

- **With API Token:** Fetches real Instagram posts
- **Without API Token:** Shows professional mock content
- **API Failure:** Falls back to mock data
- **Caching:** Posts cached for 1 hour to prevent rate limiting

## Rate Limits

Instagram Basic Display API limits:

- 200 requests per hour per user
- Our implementation caches for 1 hour, so maximum 24 requests per day

## Production Considerations

### App Review Required

For production use with real users, Facebook requires app review:

1. Submit app for review
2. Provide detailed use case explanation
3. Include privacy policy and terms of service
4. May take 2-7 business days

### Alternative Approaches

If app review is delayed, consider:

1. **Static Content:** Update mock data with actual post images
2. **Manual Updates:** Periodically update mock data with new posts
3. **RSS/Scraping:** Use Instagram RSS feeds (less reliable)

## Testing

Test the integration:

1. **Without Token:** Should show mock data
2. **With Invalid Token:** Should fallback to mock data
3. **With Valid Token:** Should show real Instagram posts

## Troubleshooting

### Common Issues

1. **"Instagram access token not found"**

   - Check `.env.local` file exists
   - Verify `INSTAGRAM_ACCESS_TOKEN` is set
   - Restart development server

2. **"Instagram API error: 400"**

   - Token expired (regenerate)
   - Invalid token format
   - Missing required permissions

3. **"No posts returned"**
   - Account has no posts
   - Posts are private
   - API rate limit exceeded

### Debug Mode

Enable detailed logging in `app/api/instagram-posts/route.ts`:

```typescript
console.log("Instagram API Response:", data);
```

## Security Notes

- Never commit `.env.local` to version control
- Use long-lived tokens (60 days) instead of short-lived (1 hour)
- Set up token refresh mechanism for production
- Monitor API usage to avoid rate limits

---

## Current Fallback Content

When Instagram API is unavailable, the site shows:

- Professional coaching content thumbnails
- Sarah Dao branding maintained
- Links to @coachsarahdaou Instagram profile
- Consistent visual design
