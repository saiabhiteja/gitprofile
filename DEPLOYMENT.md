# Deployment Guide - Sai Abhiteja Portfolio

This guide will help you deploy your portfolio to GitHub Pages.

## 🚀 Quick Deployment Steps

### 1. Repository Setup
- Ensure your repository is named `saiabhiteja.github.io` for GitHub Pages
- Make sure the repository is public

### 2. Enable GitHub Actions
1. Go to your repository's **Actions** tab
2. Click **Enable workflows** if not already enabled
3. The deployment workflow will run automatically on every push to main branch

### 3. Configure Base URL
The `base` value in `gitprofile.config.ts` is already set to `'/'` for GitHub Pages deployment.

### 4. Deploy
1. Commit and push your changes to the main branch
2. Go to **Actions** tab to monitor the deployment progress
3. Once complete, your portfolio will be available at: `https://saiabhiteja.github.io`

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The built files will be in the 'dist' folder
# Upload these files to your web hosting service
```

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add your domain in repository **Settings** → **Pages** → **Custom domain**
2. No CNAME file is required - GitHub Pages handles this automatically
3. Update your DNS settings to point to GitHub Pages

## 📝 Troubleshooting

### Common Issues:

1. **Site not loading**: Check if the `base` value is set to `'/'` in config
2. **404 errors**: Ensure repository is named correctly (`saiabhiteja.github.io`)
3. **Build failures**: Check the Actions tab for error details
4. **Styling issues**: Clear browser cache and try again

### Support:
- Check GitHub Actions logs for detailed error information
- Ensure all dependencies are properly installed
- Verify the config file syntax is correct

## 🎯 Post-Deployment

After successful deployment:

1. **Test all features**: Contact modal, theme switching, links
2. **Check mobile responsiveness**: Test on different screen sizes
3. **Verify SEO**: Check meta tags and page titles
4. **Update social links**: Ensure all links point to correct profiles

Your portfolio should now be live and accessible to the world! 🎉 