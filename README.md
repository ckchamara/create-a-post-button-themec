# Create a Post Button Theme Component

A Discourse theme component that changes the "+ New Topic" button to say "Create a Post" and styles it with a blue color scheme and smooth hover effects.

## Features

- ✅ Changes "+ New Topic" button text to "Create a Post" globally
- ✅ Modern vibrant blue color scheme (#0066cc) with darker hover effect (#0052a3)
- ✅ Enhanced styling with rounded corners, shadows, and smooth animations
- ✅ Works across all pages and contexts (topic lists, categories, inside topics)
- ✅ Mobile responsive design
- ✅ Compatible with latest Discourse versions (3.1.0+)
- ✅ Maintains accessibility features (aria-labels, tooltips)
- ✅ Handles draft states appropriately

## Installation

### Method 1: Upload Files
1. Go to your Discourse admin panel
2. Navigate to **Customize** > **Themes**
3. Click **Install** > **Upload**
4. Create a ZIP file containing all the theme files
5. Upload and enable the theme component

### Method 2: Git Repository (if hosted)
1. Go to your Discourse admin panel
2. Navigate to **Customize** > **Themes**
3. Click **Install** > **From a git repository**
4. Enter the repository URL
5. Enable the theme component

### Configuration
After installation, you can customize the theme in **Customize** > **Themes** > **Settings**:
- **Button Text**: Change "Create a Post" to any text you prefer
- **Button Color**: Customize the primary button color (default: #0066cc)
- **Button Hover Color**: Customize the hover effect color (default: #0052a3)
- **Enable Custom Styling**: Toggle the blue styling on/off

## Technical Details

### Files Structure
```
├── about.json                          # Theme metadata
├── common/
│   └── common.scss                     # CSS styling for the button
├── javascripts/discourse/
│   ├── initializers/
│   │   └── create-post-button-text.js  # Text replacement logic
│   ├── connectors/
│   │   └── before-create-topic-button/
│   │       └── create-post-button-connector.gjs
│   └── components/
│       └── create-post-button.gjs      # Custom button component
└── README.md                           # This file
```

### Color Scheme
- **Primary Blue**: #0066cc (Modern Vibrant Blue)
- **Hover Blue**: #0052a3 (Enhanced contrast)
- **Active Blue**: #004080 (Pressed state)
- **Text Color**: #ffffff (white)

### Browser Support
- Modern browsers supporting CSS3 transitions
- Mobile browsers (responsive design)
- Discourse's supported browser matrix

## Customization

To modify the button text, edit the JavaScript files and change "Create a Post" to your desired text.

To modify colors, edit `common/common.scss` and update the color values:
```scss
background: #0066cc !important;  // Change this for different primary color
```

## Testing

After installation, verify the theme component works by:

1. **Check Button Text**: Navigate to any category or topic list - the button should say "Create a Post" instead of "+ New Topic"
2. **Test Button Color**: The button should be vibrant blue (#0066cc by default) with rounded corners and subtle shadow
3. **Test Hover Effect**: Hover over the button - it should smoothly lift up and transition to a darker blue (#0052a3)
4. **Test Functionality**: Click the button - it should open the composer to create a new topic
5. **Test Mobile**: Check on mobile devices for responsive behavior
6. **Test Different Pages**: Verify the button appears correctly on:
   - Category pages
   - Topic lists
   - Inside topic pages (footer)
   - Homepage

## Troubleshooting

- **Button text not changing**: Clear browser cache and check if the theme component is enabled
- **Styling not applied**: Ensure "Enable Custom Styling" is turned on in theme settings
- **Button not appearing**: Check if you have permission to create topics in the current category

## Compatibility

- **Minimum Discourse Version**: 3.1.0
- **Plugin API Version**: 1.34.0
- **Theme Component Type**: Component (not a full theme)
- **Tested with**: Discourse 3.1.x, 3.2.x, 3.3.x

## License

This theme component is provided as-is for customization purposes.
