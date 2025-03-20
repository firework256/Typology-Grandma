# Surveillance on Grandma

**Assignment 3.7** 
*Alexandra Slabakis*

---

## Project Intention
Myself and my parents recently installed a RING to watchover my grandma who lives in Florida. 
Our primary intention was to know what's going at her home when we aren't there since we live in New York. 
Grandma Ivy is 82.
After a few days of observation, my parents were really enjoying the type of activities she was up to: gardening, unboxing the chewy deliveries for her two big Main Coon cats.
We were most of all really suprised at how busy she was! The number of deliveries, visitors, the household is really busy.
I was toying with using some sort of surveillance dataset, but when it came to possibly pursuing my grandma's dataset, it felt a bit invasive.
I had the inkling thoguht that it could be really interest to purse through, and after taling with Golan, using my grandma's dataset is quite "wholesome".
I quite agree. So I set off to make a dataset that documented the surveillance my grandmother.

<img width="400" alt="Screenshot 2025-03-20 at 4 12 05 PM" src="https://github.com/user-attachments/assets/a6a1c144-4d33-4a01-b375-b985d39ad7bb" />
<img width="200" alt="Screenshot 2025-03-20 at 4 12 34 PM" src="https://github.com/user-attachments/assets/b273dc72-584c-48b6-a4eb-30df756f2d48" />


https://github.com/user-attachments/assets/a07a525f-a11e-421e-b90f-a6cee387cec6



*I feel that I should emphasize that my grandma doesn't know about this project. If I get it to a really great place, I'd like to eventually show her.*
*However, both my parent's are well aware of the project, and suprisingly encouraged it.*



Ring Breakdown:
*Ring is 2 months of the most recent footage --> (Installed) February 15, 2025 - March 17th, 2025.
* There are exactly 250 videos - Ring allowed the export of 5 folders, which held 50 videos.
* Exported frames come to about 1,500 images per Ring folder of 50 videos.
* I had to go through and delete the images I didn't like




# Challenges
I encountered a lot of challenges with the dataset. The most being that because it's a dataset, I truly care about, I don't want to screw it up, which is why I'll be refining it profusely.


## 1. Ring Videos - Full HD Resolution

First challenge I encountered was that I wasn't working with a stationary dataset, I had to observe my grandma frame by frame.
The very first time I attempted to extract the videos frame by frame, I had maximized the storage on my computer! 499 GB/499 GB
Why? I forgot to scale the resolution and I exporated every 30 fps :)
But that's trial and error! So onto a completely new FFMPEG trial.



## 2. Ring Videos - Scale & Crop
I realized I had to start from scratch. Deleted all the RING video footage and individual frame by frames.
After various testing, I decided to:
*Scale Video to 640x360
*Crop Video to 484x360, becuase it eliminatd the part of the window that was unnecessary.
*Export Frames every 1/2 fps (every 2 seconds)


##3 General Mosaic
***From here, I tested what a mosaic would look like and I absolutely hated it!***
There wasn't enough focus on the main person, and it just looked like the same image of my grandma's front door over and over again.
You couldn't tell what was interesting about the dataset.

### Mosaic Initial Tests
*These are not with all the images
![InitialTest_grid Large](https://github.com/user-attachments/assets/34308206-67d8-4a56-af24-90225a7d1d6f)
### Mosaic - Wall
![walloutput_grid Large](https://github.com/user-attachments/assets/a06fbb36-329e-467c-a75f-dd88b0d4c092)
### Mosaic - Garden
![gardenoutput_grid Large](https://github.com/user-attachments/assets/4e54d8db-b7c0-442a-93bf-9761b33c1468)



## 3. Trial & Error - Capturing Grandma by sections of the image
I realized that I may have better luck if I organized Grandma by sections where she moved. I realized that she tended to be in the general vicinity of the 5 boxes.
*Wall
*Mid Wall & Light
*Light
*Column
*Garden/Out of Picture

My long winded thinking with this was that if I could organize frame by frame, then I could easily crop once I allocated each image into their assigned folder.
In hindset, this does work, and worked well, but it was soooooo laborious. 
The other problem is that I had to formulate where the croppings needed to take place in the folder, and I kept accidnetally cropping the wrong area! 
But trial and error, that's okie we love it!

![newVid00422_frame_0004](https://github.com/user-attachments/assets/1c1c0d02-2e2c-4df3-b0de-6e423fa64e69)

### Mosaic Cropping Errors
### Light Section - Bit hard to see her because of the light!
![light Large](https://github.com/user-attachments/assets/83345039-72a1-40d7-8370-507d151d531f)


### Somewhat Positive Mosaic Cropping Outputs
![wall_output_grid Large](https://github.com/user-attachments/assets/60a9fe99-ce3d-44bf-a9da-49fd51d7b6b5)



## 4. I wasn't cropping close enough - getting closer!!



### Wall
![wall Large](https://github.com/user-attachments/assets/3cfb6de0-2770-400d-9446-818535458734)

### Column
![columt_output_grid Large](https://github.com/user-attachments/assets/50138848-da20-4f04-856d-64c81ff94c7a)

### Garden Midlight
![garden_midlight_output_grid-0 Large](https://github.com/user-attachments/assets/f8a8a946-730d-4c2f-a66c-2f234f18f475)

![midlight_output_grid Large](https://github.com/user-attachments/assets/809e6f6b-4cee-4f7f-942f-7a6a6b784b7e)

### Light

![thelight_output_grid Large](https://github.com/user-attachments/assets/7b9d8771-54fe-4a6e-91c7-94bb63fa369a)


I tried to crop as much as I could, and condensed the garden into 5 sections based on where she was in frame.
Here is where i found a bit more success:

### Classic Square - Essentially where Grandma was out of the picture
![classicsq Large](https://github.com/user-attachments/assets/b54b4703-2d3a-4630-9e70-bd0e200572af)


### Garden Close Up
When Grandma gardens, she gets in there!
![gardencloseup Large](https://github.com/user-attachments/assets/9a5d377c-df59-412d-a963-5f8bebe1aeb3)

### Garden Kneel
Many photos were eliminated from this section.
![standingcloseup Large](https://github.com/user-attachments/assets/61d6166c-f66d-447c-b4d4-26e4b124cc3c)

### Kneel Column
This will not be shown to the class.

### Standing Column
![standingcloseup Large](https://github.com/user-attachments/assets/97d8a7d4-7ad2-4f75-84ec-c48936806d4b)


## 5. the ZOOM - How would I highlight Grandma?

I realized (a little too late) that I couldn't use every image, and it was so laborious organizing every image.
Also images of Grandma somewhat out of view as she gardened, specifically grandma in the light in between the palm trees, were likely images I should eliminate from my dashboard.


### Lasso Extract
I played around with just using a lasso to extract her

<img width="777" alt="Screenshot 2025-03-20 at 11 31 59 AM" src="https://github.com/user-attachments/assets/e6855c34-705b-4009-9338-b1b51cbdd591" />


### Trying to find overlapping outlines where Grandma moved - Didn't really work
![video0_frame_0004](https://github.com/user-attachments/assets/ae4c7efa-1f50-40ba-8214-f9770e3a6ade)




## 6. Trying to think about what makes grandma's environment special?

I decided that the things that are really interesting about grandma's environment, isn't necessarily about grandma herself (although she's the most interesting person I know), It's about the people that come to visit her, the things that make up her life like her packages, gardening, visitors etc. It gives you a glimpse into how she lives her life. 

This is obviously a really small subsection of the dataset, but as I reexamine what it is I want to focus on, these help me redisect the possibilities that I would want to further pursue.

##7. Somewhat official images

### Outfits 
![outfits_grid Large](https://github.com/user-attachments/assets/97339942-12bc-4b18-8f16-3e1fef1d0e40)


### Gardening 
![gardenshot_grid Large](https://github.com/user-attachments/assets/b7faf63e-0018-4392-8f81-fbc2c71a0531)


### Package
![package_grid Large](https://github.com/user-attachments/assets/be4edada-9d6b-4b07-80ed-6587cce25809)


### Visitors 
![visitors_grid Large](https://github.com/user-attachments/assets/f6e4329b-c78c-4e89-b7d0-420ee9e37648)


### 385 Images of Grandma 
![visitors_grid-0 Large](https://github.com/user-attachments/assets/8c039038-ffda-4b94-a446-91a86aac38b6)




# Next Steps
I think I'm a lot closer - there was a lot of progress, specifically in deciding how I want to show the images of grandma.
I also know FFMPEG AND GITHUB like the back of my hand now.
As I'm working with the dataset, I'm realizing that the presentation is increasingly key, and I'd consider this an initial version of how to manipulate the images, and better organize the information.

I want to eventually label and organize all the visitors with names, document her daily outfits, and focus on the packages that arrive, and her passion for gardening.
I think these elements really allow you to know my grandma's interests at this stage of her life through the imagery.

The videos of her hosing the garden and pacing back and forth are some of my favorite videos, and I want to be able to strongly cherish and document the ability of documenting the ring videos of her front porch.

I want to eventually update the information onto the following website: https://firework256.github.io/Typology-Grandma/
Thanks Kathleen for the interactive website inspo <3




