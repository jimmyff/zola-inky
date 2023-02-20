
# Changelog

All notable changes to this project will be documented in this file.

## [1.1]

- Set zola minimum version to 0.17
- Updated responsive images to use the new `page.colocated_path`
- Hooks names updated for consistency
- Added class parameter for responsive images
- Added `images::image()` macro and `image_original` shortcode for images that don't want resizing (eg: animated gifs)
- Added Google Analytics to `config.toml` see: `config.extra.google_analytics_tag_id`
- Fixes issues with unnecessary whitespace in templates

## [1.0]

- Packaged the theme based on the work of mr-karan and hugo-ink
- Created sample theme content, readme & changelog
- Added search template & feature
- Added gallery template & feature
- Added macro/hooks.html for customisability
- Added avatar image to header
- Added social buttons in footer
- Added tags to posts below main content
- Added responsive image macros (original author: crepererum)
- Refactored templates for consistency
- Refactored styling (more to do) & fixes for styling inconsistencies
