# Devlog Markdown

## Author: Malcolm Thompson

### 06-25-2022

Today I started with the design of the front-end on figma just to see what the site would look like.
Im trying to figure out what the best look to go with is. Since this is a project that I have to do 
quickly, then I'll implement something similar to the 412 set up.

Questions: 

- Should I have a page in the beginning where the user can input what category they are looking for, or 
  is the side bar enough.

- How can I change the layout that I come up with straight into html. Do I user angular materials... 
  something else..?

- What id angular materials exactly?

- Are there anyway of simplifying CSS?

### 06-30-2022 

Ran into an issue trying to figure out how to test individual components. Went to do ng test and got
the following error:

"No binary for Chrome browser on your platform.
  Please, set "CHROME_BIN" env variable."

In tryinng to solve this issue I found out which script was responsible for the execution of this script (Karma.config.js).

So I know how to set environment variables but I do not want to do that permanently as of yet because it does not seem necessary. If I cant figure out another way then I'll do it the "brute force" way as outlined by this video:
https://www.youtube.com/watch?v=KBaOElMo350

But maybe this why dotenv files are used? I will have to do my research on this matter. 

To do:
Find out how to set environment variables only in development, and not have to change system variables... See if this is even possible and feasible.


### 07-01-2022

Wow its a lot of shit you don't know!

First, I have to get home and see if the chdanges that I made to the Karma file will actually allow me to test. I just put the path to chrome from the WSL directly into the browsers bracket. It's not a path variable but I feel as though I can do this as long as I add the karma config file to the gitignore. DO NOT FORGET TO ADD THE KARMA FILE TO THE GITIGNORE. We'll have to experiment more with path variables at a later time.

I need the extension to view HTML files instantly...


Questions:

How do I get past this issue.

### 07-03-2022

The way to get past the issue is to download Chrome to the WSL. Remember, when you run apps off of Linux, Linux needs that app in the path. This means that even if you have it in windows, it does not matter. You need to download in Linux. Remember this moving forward!

### 07-05-2022

Fixed the testing script. Trying to make the routing work. I see that it switches to the right path for a split second before it goes back to the main page. This possibly means that the route is working but something is making it go back. After that initial switch it doesn't twitch like that again. So this could be one of the problems that my classmates were having. It had something to do with updating the new page.

