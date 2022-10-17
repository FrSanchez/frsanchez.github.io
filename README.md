# My blog source

# Run & deploy

**NOTE**: First read (https://jekyllrb.com/docs/installation/macos/)[https://jekyllrb.com/docs/installation/macos/]

You need to do `bundle install`
```bash
./scripts/localDeploy.sh
```
## Local testing
1. Run the Jekyll server: `bundle exec jekyll serve -P 4880`

## Structure

Here are the main files of the template

```bash
jekyll-theme-basically-basic
├── _includes	               # theme includes
├── _layouts                   # theme layouts (see below for details)
├── _portfolio	               # collection of article to be populated in the portfolio page
├── _posts                     # Blog posts
├── _sass                      # Sass partials
├── assets
|  ├── js	               # theme javascript, Katex, jquery, bootstrap, jekyll search,
|  ├── css                     # isolated Bootstrap, font-awesome, katex and main css
|  ├── fonts		       # Font-Awesome, and other fonts
|  └── img		       # Images used for the template
├── pages
|   ├── 404.md		       # To be displayed when url is wrong
|   ├── about.md               # About example page
|   ├── gallery.md             # Gallery page for your photos
|   ├── portfolio.md	       # Portfolio page for your projects
|   ├── search.html	       # Search page
|   └── tags.md                # The tag page
├── _config.yml                # sample configuration
└── index.html                 # sample home page (blog page paginated)
```

## Configure Type on Strap

Open `_config.yml` in a text editor to change most of the blog's settings.

If a variable in this document is marked as "optional", disable the feature by removing all text from the variable.



### Math typesetting

When KateX is set in `_config.yml`:

```yml
katex: true # to Enable it
```

You can then wrap math expressions with `$$` signs in your posts and make sure you have set the `katex` variable
in `_config.yml` to `true` for math typesetting.

For inline math typesetting, type your math expression on the *same line* as your content. For example:

```latex
Type math within a sentence $$2x^2 + x + c$$ to display inline
```

For display math typesetting, type your math expression on a *new line*. For example:

```latex
$$
  \bar{y} = {1 \over n} \sum_{i = 1}^{n}y_i
$$
```

### Social icons

In `_data/social.yml` you can customize the social icons from other wbesite you wish to display in the blog.
The site icons come from [Font Awesome](https://fontawesome.com/).


### Customizing Posts

When writing a post, be sure in jekyll to:
 - Put it in the `_posts` folder
 - Name it with the date first like `2019-08-21-This-is-my-blog-post.md`

#### Layout: Post

This are the basic features you can use with the  `post` layout.

```yml
---
layout: post
title: Hello World                                # Title of the page
hide_title: true                                  # Hide the title when displaying the post, but shown in lists of posts
feature-img: "assets/img/sample.png"              # Add a feature-image to the post
thumbnail: "assets/img/thumbnail/sample-th.png"   # Add a thumbnail image on blog view
color: rgb(80,140,22)                             # Add the specified color as feature image, and change link colors in post
bootstrap: true                                   # Add bootstrap to the page
tags: [sample, markdown, html]
---
```

With `thumbnail`, you can add a smaller image than the `feature-img`.
If you don't have a thumbnail you can still use the same image as the feature one.

The background used when `color` is set comes from `lineart.png` from [xukimseven](https://github.com/xukimseven)
you can edit it in the config file (`_config.yml > color_image`). If you want another one, put it in `/assets/img` as well.

The **bootstrap** is not mandatory and is only useful if you want to add bootstrapped content in your page.
It will respect the page and theme layout, mind the padding on the sides.

#### Post excerpt

The [excerpt](https://jekyllrb.com/docs/posts/#post-excerpts) are the first lines of an article that is display on the blog page.
The length of the excerpt has a default of around `250` characters or can be manually set in the post using:

in `conflig.yml`:

```yml
excerpt: true
```

Then in your post, add the `excerpt separator`:

```yml
---
layout: post
title: Sample Page
excerpt_separator: <!--more-->
---

some text in the excerpt
<!--more-->
... rest of the text not shown in the excerpt ...
```

The html is stripped out of the excerpt so it only display text.

## Other Layouts
Please refer to the [Jekyll docs for writing posts](https://jekyllrb.com/docs/posts/).
Non-standard features are documented below.

### Layout: Page

The page layout have a bit more features explained here.

```yml
---
layout: page
title: "About"
subtitle: "This is a subtitle"   
feature-img: "assets/img/sample.png"
permalink: /about.html               # Set a permalink your your page
hide: true                           # Prevent the page title to appear in the navbar
icon: "fa-search"                    # Will Display only the fontawesome icon (here: fa-search) and not the title
tags: [sample, markdown, html]
---
```

The hide only hides your page from the navigation bar, it is however still generated and can be access through its link.

### Layout: Default

This layout includes the head, navigation bar and footer around your content.

## Feature pages

All feature pages besides the "home" one are stored in the `page` folder,
they will appear in the navigation bar unless you set `Hide: true` in the front matter.

Here are the documentation for the other feature pages that can be added through `_config.yml`.

### Home

This page is used as the home page of the template (in the `index.html`). It displays the list of articles in `_posts`.
You can use this layout in another page (adding a title to it will make it appear in the navigation bar).

The recommended width and height for the home picture is width:`2484px;` and height:`1280px`
which are the dimensions of the actual picture for it to be rolling down as you scroll the page.

If your posts are not displaying ensure that you have added the line `paginate: 5` to `_config.yml`.

### Portfolio

Portfolio is a feature page that will take all the markdown/html files in the `_portfolio` folder to create a 3-columns image portfolio matrix.

To use the portfolio, simply create a `portfolio.md` with this information inside:
```yml
---
layout: page
title : Portfolio
---

{% include portfolio.html %}
```

#### Portofolio posts

You can format the portfolio posts in the `_portfolio` folder using the `post layout`. Here are little explaination on some of the possible feature you can use and what they will do.

If you decide to use a date, please be sure to use one that can be parsed such as `yyyy-mm-dd`. You can see more format example on the demo posts that are available for the theme:

```yml
---
layout: post
title: Circus				       # Title of the portfolio post
feature-img: "assets/img/portfolio/cake.png"   # Will display the image in the post
img: "assets/img/portfolio/cake.png"           # Will display the image in the portfolio page
date: 2019-07-25		 	       # Not mandatory, however needs to be in date format to display the date
---
```

#### Portfolio in gem

Make sure your `_config.yml` contains the following if you are using the theme as a gem:

```yml

# PORTFOLIO
collections:
  portfolio:
    output: true
    permalink: /:collection/:name
```    

This creates the collection for Jekyll so it can find and display your portfolio posts.

### Gallery

You can create a gallery using [Masonry JS](https://masonry.desandro.com/) which will placing the pictures in optimal position
based on available vertical space.
You need to specify the `gallery_path` which will be used to find the pictures to render.
It will take all of the picture under that directory. Then use the `include` to add it in your page.

```yml
---
layout: page
title: Gallery
gallery: "assets/img/pexels"
---

{% include gallery.html gallery_path=page.gallery %}
```


### Search

The search feature is based on [Simple-Jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search)
there is a `search.json` file that will create a list of all of the site posts, pages and portfolios.

Then there's a `search.js` displaying the formatted results entered in the `search.html` page.

The search page can be hidden with the `hide` option. You can remove the icon by removing `icon`:

```yml
---
layout: search
title: Search
icon: "search"
---
```

### Tags

Tags should be placed between `[]` in your post metadata. Separate each tag with a comma.
Tags are recommended for posts and portfolio items.

For example:

```yml
---
layout: post
title: Markdown and HTML
tags: [sample, markdown, html]
---
```

> Tags are case sensitive `Tag_nAme` ≠ `tag_name`

All the tags will be listed in `tags.html` with a link toward the pages or posts.
The Tag page can be hidden with the `hide` option. You can remove the icon by removing `icon` (like for the search page).

## Advanced

### Liquid tags

Jekyll works with [liquid](https://shopify.github.io/liquid/) tags usually represented by:

```
{{ liquid.tag | filter }}
```

These are useful to render your jekyll files.
You can learn more about them on [shopify's doc](https://help.shopify.com/themes/liquid/basics)

### Minimizing and optimizing: css, js and images

Before you need to have `node` and `npm` installed:
- Windows: https://nodejs.org/
- Ubuntu/Debian: `apt-get install nodejs npm libgl1 libxi6`
- Fedora (dnf) / RHEL/CentOS (yum): `dnf install node npm libglvnd-glx libXi`

Then you need to install [`gulp-cli`](https://gulpjs.com/) and its dependencies:
```shell
cd assets/
sudo npm install gulp-cli -g
npm install
```

**Now, whenever you want to minify and optimize, run:**
```shell
cd assets/
gulp default
# tip: run a git status to see the changes
git status
```
